const router = require("express").Router();

const { userRegister } = require("../controllers/user-controller");


router.post("/registerUser", userRegister);


//TODO - PASSAR AS ROTAS DO REDUX MOVIESRELATED E SERIESRELATED PARA ROTAS E CONTROLLERS AQUI