import axios from "axios";

export async function getMovies() {
  //TODO - TALVEZ ALTERAR PARA RECEBER PARAMETRO DE TAG (POPULAR, TOP RATED ETC...)
  try {
    // const url = `${import.meta.env.VITE_BACKEND_URL}/getMovies` //! EXEMPLO DE COMO VAI FICAR AS ROTAS
    const url = `https://api.themoviedb.org/3/movie/popular?language=pt-BR&api_key=${import.meta.env.VITE_TMDB_APIKEY}`;
    const response = await axios.get(url)
    console.log(response.data)
    return response.data.results  
  } catch (error) {
    return console.error(error);
  }
}

export async function getMovie(movieId) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR&api_key=${import.meta.env.VITE_TMDB_APIKEY}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return console.error(error)
  }
}


export async function getSimilar(movieId) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?language=pt-BR&api_key=${import.meta.env.VITE_TMDB_APIKEY}`;
    const response = await axios.get(url);
    return response.data.results;  
  } catch (error) {
    return console.error(error)
  }
}

export async function getCast(movieId) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=pt-BR&api_key=${import.meta.env.VITE_TMDB_APIKEY}`;
    const response = await axios.get(url);
    return response.data; 
  } catch (error) { 
    return console.error(error)
  }
}

export async function getProviders(movieId) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?language=pt-BR&api_key=${import.meta.env.VITE_TMDB_APIKEY}`
    const response = await axios.get(url);
    return response.data.results.BR;
  } catch (error) {
    return console.error(error)
  }
}