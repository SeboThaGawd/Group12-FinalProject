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
                catArray[i].spent =  parseInt(catArray[i].spent) + parseInt(amount);
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

router.delete('/delete', auth, async (req, res) => {
    try {
        const user = await USER.findById(req.user.id);
        const catToRem = req.body.rem;
        const currentCat = user.categories;
        for (var i = 0; i < currentCat.length; i++) {
            if (currentCat[i].catID == catToRem) {
                currentCat.splice(i,1)
                break
            }
        }
        const query = {_id: req.user.id};
        User.findOneAndUpdate(query, {categories: currentCat}, {new: true}, function(err, User) {
            if (err) {
                console.log(err);
                res.json({msg: "cannot delete from categories list"})
            } else {
                res.json({
                    status: "deleted successful",
                    categories: User.categories
                })
            }
        })
    } catch(err) {
        res.json({ message: "Cannot Find" })
    }
})


router.put('/edit', auth, async (req, res) => {
    try {
        const user = await USER.findById(req.user.id);
        const newBudget = req.body.newBudget;
        const inputCategory = req.body.category;
        const catArray = user.categories;
        for (let i = 0; i < catArray.length; i++) {
            if (catArray[i].catID == inputCategory) {
                catArray[i].budget =  newBudget;
                console.log(catArray);
                break;
            }
        }
        await user.save();
        res.json(user);
    } catch(err) {
        res.json({ message: "Error in editing budget" });
    }
});

modelName.exports = router
module.exports = router;