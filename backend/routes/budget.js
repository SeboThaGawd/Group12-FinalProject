const express = require('express');
const router = express.Router();
const auth = require('./../middleware/auth');
const USER = require('../models/UserSchema');
const { modelName } = require('../models/UserSchema');

router.put('/add', auth, async (req, res) => {
    try {
        const user = await USER.findById(req.user.id);
        const amount = req.body.Amount;
        const inputCategory = req.body.Category;
        const catArray = user.categories;
        for (let i = 0; i < catArray.length; i++) {
            if (catArray[i].catID == inputCategory) {
                catArray[i].spent =  catArray[i].spent + amount;
                console.log(catArray);
                break;
            }
        }
        await user.save();
        res.json(user);
    } catch(err) {
        res.json({ message: "Error in updating spent amount" });
    }
});

router.get('/get', auth, async (req, res) => {
    try {
        const user = await USER.findById(req.user.id);
        res.json(user.categories);
    } catch(err) {
        res.json({ message: "Error in retrieving user data" });
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