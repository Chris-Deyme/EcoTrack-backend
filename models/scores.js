const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({
  score: Number,
  date: Date,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
});

const Score = mongoose.model('scores', scoreSchema);

module.exports = Score;