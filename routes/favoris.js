var express = require('express');
const axios = require("axios");
var router = express.Router();
const favorisController = require("./../controller/favorisController");

router.post('/addFavoris/:name', favorisController.addFavoris);

router.get('/', favorisController.getAllFavoris);

router.post('/removeFavorit/:id', favorisController.removeFavorit);

module.exports = router;