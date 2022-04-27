const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    categories: [{              
        "catID": String,
        "spent": Number,
        "budget": Number
    }],
    date : {
        type: Date,
        default: Date.now()
    }
}); 



module.exports = mongoose.model('users', userSchema);