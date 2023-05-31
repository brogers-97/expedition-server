const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    characterName: {
      type: String,
      required: true
    },
    health: {
      type: Number,
      default: 100
    },
    attacks: [String], // or you could create a separate Attack schema
  });
  
module.exports = mongoose.model('Player', PlayerSchema)