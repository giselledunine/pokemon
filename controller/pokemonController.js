const axios = require("axios");
const Pokemon = require('./../model/pokemonModel');

const getAll = async function(req, res, next) {
  const pokemons = await axios.get('https://pokeapi.co/api/v2/pokemon').then(result => result.data).catch(err => console.log(err));

  res.render('index', { title: 'Express', count: pokemons.count, results: pokemons.results });
};

const getOne = async function(req, res, next) {
  const {name} = req.params;
  const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(result => result.data).catch(err => console.log(err));
  if(!pokemon) {
    next();
  }else {
    res.render('details', {title: pokemon.name, abilities: pokemon.abilities});
  }
}

  module.exports = {getAll, getOne}