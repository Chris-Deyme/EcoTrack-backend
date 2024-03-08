const mongoose = require('mongoose');

const questSchema = mongoose.Schema({
  id: Number,
  categorie: String,
  description: String,
}); 
const Quest = mongoose.model('quests', questSchema);

module.exports = Quest;