var express = require('express');
var router = express.Router();
const axios = require('axios');
const pokemonController = require('./../controller/pokemonController');

/* GET users listing. */
router.get('/', pokemonController.getAll);

module.exports = router;
