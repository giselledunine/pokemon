const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  favoris: Boolean,
})
const Pokemon = mongoose.model('Pokemon', userSchema);

module.exports = Pokemon;

// - Se connecter à la base de données
// - Créer un model User
// - Créer une route permettant d'utiliser la méthode d'un controller
// - Tester cette route à l'aide de postman