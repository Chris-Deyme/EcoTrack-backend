const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  street: String,
  city: String,
  postcode: Number,
});

const structureSchema = mongoose.Schema({
  name: String,
  category: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  address: addressSchema,
});

const Structure = mongoose.model("structures", structureSchema);

module.exports = Structure;
