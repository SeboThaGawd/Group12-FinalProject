//SERVER STUFF
const express = require('express');
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log("Server listening at ${port}");
});

app.use(express.json());
app.use(express.urlencoded());

//DATABASE STUFF
const mongoose = require('mongoose');

const db = mongoose.connection;
const url = "mongodb://127.0.0.1:27017/"; // UPDATE LATER

db.once('open', _ => {
  console.log('Database connected')
});

db.once('error', err => {
  console.log('connection error', err)
});

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });

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

const USER = mongoose.model('USER', userSchema);

//DB SCHEMA BREAKDOWN


//COLLECTION: USERS:
    //Name (String)
    //Password (String) (We can SHA hash) (add characters at the end first)
    //Spending cap, ...etc (Any other configurable settings we choose)
    //Categories (List of JSONS):
        //Category (JSON) {
            //Priority (Number)
            //Name (String)
        //}

//ROUTES
    //'/'
    //

//PUT
    //take info from "new entry" form or something and USER.create()
    //req.env.body or something
//GET

//POST

//DELETE