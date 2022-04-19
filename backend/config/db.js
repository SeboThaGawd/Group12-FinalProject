const mongoose = require('mongoose');
const { modelName } = require('../models/UserSchema');

const url = "mongodb+srv://FullStackDecal12:flowersandrainbows@cluster0.cwm0b.mongodb.net/test"; //Mongo DB Atlas
mongoose.connect(url);

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connected to DB")
    } catch (e) {
        console.log(e)
        throw e
    }
}

modelName.exports = InitiateMongoServer