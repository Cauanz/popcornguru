import axios from "axios";

export async function getMovies() {
  //TODO - TALVEZ ALTERAR PARA RECEBER PARAMETRO DE TAG (POPULAR, TOP RATED ETC...)
  const url = `https://api.themoviedb.org/3/movie/popular?language=pt-BR&api_key=${import.meta.env.VITE_TMDB_APIKEY}`;
  const response = await axios.get(url)
  console.log(response.data)
  return response.data.results
}

export async function getMovie(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR&api_key=${import.meta.env.VITE_TMDB_APIKEY}`;
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
}


export async function getSimilar(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?language=pt-BR&api_key=${import.meta.env.VITE_TMDB_APIKEY}`;
  const response = await axios.get(url);
  return response.data.results;
}

export async function getCast(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=pt-BR&api_key=${import.meta.env.VITE_TMDB_APIKEY}`;
  const response = await axios.get(url);
  return response.data;
}