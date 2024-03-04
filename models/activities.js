const mongoose = require('mongoose');

const activitySchema = mongoose.Schema({
  name: String,
  category: String,
  points: Number,
  carbone: Number,
  Icon: String,
});

const Activity = mongoose.model('activities', activitySchema);

module.exports = Activity;