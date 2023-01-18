const express = require("express")
const router = express.Router()
const checkToken = require("../controllers/checkToken")
const moviesControllers = require("../controllers/movies");


router.get("/movies", checkToken.checkToken, moviesControllers.getMovies)

module.exports = router