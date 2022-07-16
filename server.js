const path = require('path');
const express = require("express");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    //res.sendStatus(500).send("Hi Internal server Error");
    //res.download('server.js');
    res.render('index', {text: "World"});
})

app.get('/json', (req, res) => {
    res.render('json', {text: "World"});
})

const userRouter = require('./routes/users');

app.use('/users', userRouter);

app.listen(3000)

