import axios from "axios";


export async function getSeries() {
  const url = `https://api.themoviedb.org/3/tv/popular?language=pt-BR&api_key=${import.meta.env.VITE_TMDB_APIKEY}`;
  const response = await axios.get(url);
  return response.data.results;
}

export async function getSerie(serieId) {
  const url = `https://api.themoviedb.org/3/tv/${serieId}?language=pt-BR&api_key=${import.meta.env.VITE_TMDB_APIKEY}`;
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
}