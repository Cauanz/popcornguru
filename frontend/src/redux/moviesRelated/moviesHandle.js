import axios from "axios";

export async function getMovies() {

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=3068ddc5a953739e3df63d3b6d78eee0`;
  const response = await axios.get(url)
  console.log(response.data)
  return await response.data.results
}
