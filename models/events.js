const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  street: String,
  city: String,
  poostcode: Number,
});

const eventSchema = mongoose.Schema({
  name: String,
  category: String,
  date: Date,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  address: addressSchema,
});

const Event = mongoose.model("events", eventSchema);

module.exports = Event;
