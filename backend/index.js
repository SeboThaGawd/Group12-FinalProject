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

const url = "mongodb+srv://FullStackDecal12:flowersandrainbows@cluster0.cwm0b.mongodb.net/test"; //Mongo DB Atlas
mongoose.connect(url);

const db = mongoose.connection;

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

//update
app.patch('/put', async (req, res) => {
    try {
        const id = req.body.id;
        const newBody = req.body;
        const updatedObject = await USER.findByIdAndUpdate(
            id, newBody, {new : true}
        );
        res.send(updatedObject);
    } catch (err){
        res.status(400).json({message : err.message});
    }
});

//delete
app.delete('/delete', async(req, res) => {
    try {
        const id = req.body.id;
        const deletedName = USER.findById(id).name;
        await USER.findByIdAndDelete(id);
        res.send("Deleted ${deletedName}");
    } catch(err) {
        res.status(400).json({message : err.message});
    }
});

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