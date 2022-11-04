var express = require('express');
const axios = require("axios");
const pokemonController = require("./../controller/pokemonController");
var router = express.Router();

/* GET home page. */
router.get('/', pokemonController.getAll);

/**
 * Afficher un pokemon et ses détails
 */
router.get('/:name', pokemonController.getOne);



module.exports = router;
