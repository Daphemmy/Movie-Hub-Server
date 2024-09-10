const express = require("express");
const {
  allShows,
  allSeries,
  allMovies,
} = require("../controllers/movieController");
const methodNotAllow = require("../utils/methodNotAllow");

const router = express.Router();

router.route("/").get(allShows).all(methodNotAllow);

router.route("/series").get(allSeries).all(methodNotAllow);

router.route("/movies").get(allMovies).all(methodNotAllow);

module.exports = router;
