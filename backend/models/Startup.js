const mongoose = require("mongoose");

const startupSchema = new mongoose.Schema({
  name: String,
  email: String,
  idea: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Startup", startupSchema);
