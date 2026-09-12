const express = require("express");
const router = express.Router();
const pokedexController = require("../controllers/pokedexController");

router.get("/", pokedexController.home);
router.post("/pokemon", pokedexController.addPokemon);

module.exports = router;