const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cap: {
        type: Number,
        required: true
    },
    categories: {
        type: [Object],
        required: true
    }
});

module.exports = mongoose.model('userScehma', userSchema)