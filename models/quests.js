const mongoose = require('mongoose');

const questSchema = mongoose.Schema({
  name: String,
  category: String,
  description: String,
  completed: Boolean,
  Icon: String,
});

const Quest = mongoose.model('quests', questSchema);

module.exports = Quest;