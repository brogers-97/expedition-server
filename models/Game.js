const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({
    players: [{
         type: mongoose.Schema.Types.ObjectId, ref: 'Player' 
        }],
    boss: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'Boss' 
    },
    gameData: {
      attacks: [String], // or you could create a separate Attack schema
      state: String, // indicates the current state of the game
      // any additional game data
    }
  });
  

module.exports = mongoose.model('Game', GameSchema)