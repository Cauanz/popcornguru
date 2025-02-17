const router = require("express").Router();

const { getSerie } = require("../../frontend/src/redux/seriesRelated/seriesHandle");
const { getMovies, getMovie, getSimilar, getCast, getProviders, getPopularMovies, getTopRatedMovies, getUpcomingMovies } = require("../controllers/movie-controller");
const { getSeries } = require("../controllers/serie-controller");
const { userRegister } = require("../controllers/user-controller");


router.post("/registerUser", userRegister);


// MOVIE ROUTES

// router.get("/getMovies", getMovies);
router.get("/getPopularMovies", getPopularMovies)
router.get("/getTopRatedMovies", getTopRatedMovies)
router.get("/getUpcomingMovies", getUpcomingMovies)
router.get("/getMovie/:id", getMovie);
router.get("/getSimilar/:id", getSimilar);
router.get("/getCast/:id", getCast);
router.get("/getProviders/:id", getProviders);


//SERIES ROUTES

router.get("/getSeries", getSeries);
router.get("/getSerie/:id", getSerie);

//TODO - PASSAR AS ROTAS DO REDUX MOVIESRELATED E SERIESRELATED PARA ROTAS E CONTROLLERS AQUI


module.exports = router;