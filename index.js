const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/moviesDB', { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to database...")
    })
    .catch(err => {
        throw err;
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send('WOOF!')
})

app.listen(3000, () => {
    console.log("Listening to port 3000")
})