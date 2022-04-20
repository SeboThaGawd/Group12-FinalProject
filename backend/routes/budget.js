const express = require('express')
const router = express.Router()
const auth = require('./../middleware/auth')
const USER = require('../models/UserSchema');
const { modelName } = require('../models/UserSchema');

//update
router.put('/put', auth, async (req, res) => {
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
router.delete('/delete', auth, async(req, res) => {
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
router.get('/retrieve', auth, (req, res) => {
    USER.findOne({ name: req.name }).exec((error, images) => {
        if (error) {
          console.log(error)
          res.send(500)
        } else {
          res.json({favorite: images[0]})
        }
    })
  })
  
//POST
router.post('/add', auth, (req, res) => {
    const cat = new USER({
        name: req.body.name,
        password: req.body.password,
        cap: req.body.cap,
        categories: req.body.categories
    })
    apod.save((error, document) => {
    if (error) {
        res.json({status: "issue adding"});
    } else {
        res.json({content: req.body});
    }
    })
  })

//DELETE

modelName.exports = router
module.exports = router;