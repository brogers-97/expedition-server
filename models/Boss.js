const mongoose = require('mongoose')

const BossSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    health: {
      type: Number,
      default: 100
    },
    attacks: [String] // or you could create a separate Attack schema
    // you could add a function here to handle the boss's attacks
  });
  

module.exports = mongoose.model('Boss', BossSchema)