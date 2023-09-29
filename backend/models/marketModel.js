const mongoose = require("mongoose")
const { Schema } = mongoose;

const marketModel = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  logo: { type: String, required: false, default: "../assets/img/default.png" },
  backgroundColor: { type: String, required: false, default: "#c3c3c3" },
  color: { type: String, required: false, default: "#000000" },
  isActive: { type: Boolean, required: false, default: true },
  created: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Market", marketModel);