const axios = require("axios");

// const getMovies = async (req, res) => {
//   try {
//     const url = `https://api.themoviedb.org/3/movie/popular?language=pt-BR&api_key=${process.env.VITE_TMDB_APIKEY}`;
//     const response = await axios.get(url)
//     // console.log(response.data)
//     res.send(response.data.results);
//   } catch (error) {
//     res.status(404).json(error);
//   }
// }

const getPopularMovies = async (req, res) => {
  try {
    const url = `https://api.themoviedb.org/3/movie/popular?language=pt-BR&api_key=${process.env.VITE_TMDB_APIKEY}`;
    const response = await axios.get(url)
    // console.log(response.data)
    res.send(response.data.results);
  } catch (error) {
    res.status(404).json(error);
  }
}

const getTopRatedMovies = async (req, res) => {
  try {
    const url = `https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&api_key=${process.env.VITE_TMDB_APIKEY}`;
    const response = await axios.get(url)
    // console.log(response.data)
    res.send(response.data.results);
  } catch (error) {
    res.status(404).json(error);
  }
}

const getUpcomingMovies = async (req, res) => {
  try {
    const url = `https://api.themoviedb.org/3/movie/upcoming?language=pt-BR&api_key=${process.env.VITE_TMDB_APIKEY}`;
    const response = await axios.get(url)
    // console.log(response.data)
    res.send(response.data.results);
  } catch (error) {
    res.status(404).json(error);
  }
}

const getMovie = async (req, res) => {
  try {
    const movieId = req.params.id;
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR&api_key=${process.env.VITE_TMDB_APIKEY}`;
    const response = await axios.get(url);
    console.log(response)
    res.send(response.data);
  } catch (error) {
    res.status(404).json(error);
  }
}

const getSimilar = async (req, res) => {
  try {
    const movieId = req.params.id;
    const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?language=pt-BR&api_key=${process.env.VITE_TMDB_APIKEY}`;
    const response = await axios.get(url);
    res.send(response.data.results);  
  } catch (error) {
    res.status(500).json(error)
  }
}

const getCast = async (req, res) => {
  try {
    const movieId = req.params.id;
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=pt-BR&api_key=${process.env.VITE_TMDB_APIKEY}`;
    const response = await axios.get(url);
    res.send(response.data); 
  } catch (error) { 
    res.status(404).json(error);
  }
}

const getProviders = async (req, res) => {
  try {
    const movieId = req.params.id;
    const url = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?language=pt-BR&api_key=${process.env.VITE_TMDB_APIKEY}` 
    const response = await axios.get(url);
    res.send(response.data.results.BR);
  } catch (error) {
    res.status(404).json(error);
  }
}

module.exports = { getMovie, getSimilar, getCast, getProviders, getPopularMovies, getUpcomingMovies, getTopRatedMovies, };