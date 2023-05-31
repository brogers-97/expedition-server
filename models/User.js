const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        games: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Game'
        }],
        friends: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'User'
        }]
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('User', UserSchema)