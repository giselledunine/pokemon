const Pokemon = require("./../model/pokemonModel");

const addFavoris = async function(req, res, next) {
  const {name} = req.params;
  const alreadyExist = await Pokemon.find({name}).then(result => result).catch(err => console.log(err));
  if(!alreadyExist){
    const newPokemon = new Pokemon({name, favoris: true});
    newPokemon.save().then(result => {
      res.status(200).json({status: 'succes', data: {result}});
      console.log(result);
    }).catch(err => console.log(err));
  } else {
    res.status(400).json({status: 'already exist', message: 'le pokemon est déjà dans vos favoris'});
  }
}

const getAllFavoris = async function(req, res, next) {
  const favorites = await Pokemon.find().then(result => result).catch(err => console.log(err));
  res.render('favoris', {title: 'Favoris', results: favorites})
}

const removeFavorit = async function(req, res, next) {
  const {id} = req.params;
  const deletePokemon = Pokemon.findByIdAndDelete(id).then(result => result).catch(err => console.log(err));
  if(!deletePokemon) {
    res.status(400).json({
      status: 'not found',
      message: "Le pokémon n'a pas été trouvé"
    });
  } else {
    res.status(200).json({
      status: 'success',
      message: 'Le pokémon a bien été supprimé',
      data:{
        deletePokemon
      }
    });
  }
}
module.exports = {
  addFavoris,
  getAllFavoris,
  removeFavorit
}