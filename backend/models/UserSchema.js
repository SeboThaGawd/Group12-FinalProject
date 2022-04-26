const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    //array of category objects
    categories: [{              //"budget" field removed
        "catID": Number,
        "spent": Number,
        "budget": Number
    }],
    date : {
        type: Date,
        default: Date.now()
    }
}); 



module.exports = mongoose.model('userScehma', userSchema)