const mongoose = require('mongoose');

const url = "mongodb+srv://FullStackDecal12:flowersandrainbows@cluster0.cwm0b.mongodb.net/Cluster0"; //Mongo DB Atlas

mongoose.connect(url);

const InitiateMongoServer = async () => {
    try {
      await mongoose.connect(url, {
        useNewUrlParser: true,
      });
      console.log('Connected to DB!!');
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
  
  module.exports = InitiateMongoServer;