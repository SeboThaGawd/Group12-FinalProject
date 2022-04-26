const express = require('express')
const router = express.Router()
const auth = require('./../middleware/auth')
const USER = require('../models/UserSchema');
const { modelName } = require('../models/UserSchema');

//user selects category name form dropdown menu and inputs how much they spent on it
//so we retrieve the current spent amount for the selected category and add "amount" to it

//WE SHOULD PROBABLY CHANGE CATID TO JUST THE NAME OF THE CATEGORY
router.post('/add', auth, async(req, res) => {
    try {
        const amount = req.body.amount;
        const catId = req.body.catId;
        const id = req.body.id;
        const user = await USER.findById(id);
        const catArray = user.categories;
        const cat = catArray[catId];
        cat.spent = cat.spent + amount;
        await user.save();
        res.json(user);
    } catch(err) {
        res.json({ message: "Error in updating spent amount" });
    }
});


// //update
// router.put('/put', auth, async (req, res) => {
//     try {
//         const id = req.body.id;
//         const newBody = req.body;
//         const updatedObject = await USER.findByIdAndUpdate(
//             id, newBody, {new : true}
//         );
//         res.send(updatedObject);
//     } catch (err){
//         res.status(400).json({message : err.message});
//     }
// });

// //delete
// router.delete('/delete', auth, async(req, res) => {
//     try {
//         const id = req.body.id;
//         const deletedName = USER.findById(id).name;
//         await USER.findByIdAndDelete(id);
//         res.send("Deleted ${deletedName}");
//     } catch(err) {
//         res.status(400).json({message : err.message});
//     }
// });

// //DB SCHEMA BREAKDOWN


// //COLLECTION: USERS:
//     //Name (String)
//     //Password (String) (We can SHA hash) (add characters at the end first)
//     //Spending cap, ...etc (Any other configurable settings we choose)
//     //Categories (List of JSONS):
//         //Category (JSON) {
//             //Priority (Number)
//             //Name (String)
//         //}

// //ROUTES
//     //'/'
//     //

// //PUT
//     //take info from "new entry" form or something and USER.create()
//     //req.env.body or something

// //GET
// router.get('/retrieve', auth, async (req, res) => {
//     try {
//         const user = await User.findById(req.user.id);
//         res.json(user);
//     } catch(e) {
//         res.send({message: "Error in Fetching User"});
//     }
//   })
  
// //POST
// /**
//  * name: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     cap: {
//         type: Number,
//         required: true
//     },
//     categories: {
//         type: [Object],
//         required: true
//     }
//  */
// router.post('/add', auth, async (req, res) => {
//     const category = new USER({
//         name: req.body.name,
//         password: req.body.password,
//         cap: req.body.cap,
//         categories: req.body.categories
//     })
//     category.save((error, document) => {
//         if (error) {
//             res.json({status: "issue adding"});
//         } else {
//             res.json({
//                 status: "success",
//                 content: req.body
//               });
//         }
//     })
//   })

// //DELETE

modelName.exports = router
module.exports = router;