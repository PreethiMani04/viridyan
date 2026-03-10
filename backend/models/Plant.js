const mongoose = require("mongoose");

const PlantSchema = new mongoose.Schema({

  botanicalName:String,
  commonName:String,
  ayushSystem:String,
  diseases:[String],
  uses:String,
  partsUsed:String,
  recipes:[String],
  growthConditions:String,

  model:String,

  position:{
    x:Number,
    y:Number,
    z:Number
  }

});

module.exports = mongoose.model("Plant",PlantSchema);