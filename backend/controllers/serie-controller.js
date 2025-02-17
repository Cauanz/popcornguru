const axios = require("axios");

const getSeries = async (req, res) => {
  try {
    const url = `https://api.themoviedb.org/3/tv/popular?language=pt-BR&api_key=${process.env.VITE_TMDB_APIKEY}`;
    const response = await axios.get(url);
    res.send(response.data.results);
  } catch (error) {
    res.status(500).json(error);
  }
}

const getSerie = async (req, res) => {
  try {
    const serieId = req.params.serieId;
    const url = `https://api.themoviedb.org/3/tv/${serieId}?language=pt-BR&api_key=${process.env.VITE_TMDB_APIKEY}`;
    const response = await axios.get(url);
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    res.status(500).json(error);
  }
}


module.exports = { getSeries };