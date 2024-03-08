const mongoose = require('mongoose');

const tipSchema = mongoose.Schema({
    id: Number,
    texte: String,
});
const Tips = mongoose.model('tips', tipSchema);

module.exports = Tips;