//SERVER STUFF: Setting port and importin express
const express = require('express');
const bodyParser = require('body-parser')
const InitiateMongoServer = require("./config/db")
const user = require('./routes/user')
const budget = require('./routes/budget')

InitiateMongoServer()

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded());

app.use('/user', user)
app.use('/budget', budget)

app.get('/', (req, res) => {
    res.json({ message: 'API Online' })
})

app.listen(port, (req, res) => {
    console.log(`Server Started at PORT ${port}`)
})
