import axios from "axios";

export async function getMovies(address) {
  //TODO - TALVEZ ALTERAR PARA RECEBER PARAMETRO DE TAG (POPULAR, TOP RATED ETC...)
  // const url = `https://api.themoviedb.org/3/movie/popular?language=pt-BR&api_key=${import.meta.env.VITE_TMDB_APIKEY}`;
  const url = `${import.meta.env.VITE_BACKEND_URL}/get${address}Movies`;
  const response = await axios.get(url)
  // console.log(response.data)
  return response;
}

export async function getMovie(movieId) {
  // const url = `https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR&api_key=${import.meta.env.VITE_TMDB_APIKEY}`;
  const url = `${import.meta.env.VITE_BACKEND_URL}/getMovie/${movieId}`;
  const response = await axios.get(url);
  return response;
}

export async function getSimilar(movieId) {
  // const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?language=pt-BR&api_key=${import.meta.env.VITE_TMDB_APIKEY}`;
  const url = `${import.meta.env.VITE_BACKEND_URL}/getSimilar/${movieId}`;
  const response = await axios.get(url);
  return response;  
}

export async function getCast(movieId) {
  // const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=pt-BR&api_key=${import.meta.env.VITE_TMDB_APIKEY}`;
  const url = `${import.meta.env.VITE_BACKEND_URL}/getCast/${movieId}`;
  const response = await axios.get(url);
  return response; 
}

export async function getProviders(movieId) {
    // const url = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?language=pt-BR&api_key=${import.meta.env.VITE_TMDB_APIKEY}` 
    const url = `${import.meta.env.VITE_BACKEND_URL}/getProviders/${movieId}`;
    const response = await axios.get(url);
    return response;
}