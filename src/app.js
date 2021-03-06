const morgan = require('morgan');
const indexRoutes = require('./routes/index');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

// connecting to db

mongoose.connect('mongodb://localhost/crud-mongo', {useNewUrlParser: true})
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));

//settings 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// routes

app.use('/', indexRoutes);

// start servidor 

app.listen(3000, () => {
    console.log('Server on port 3000');
})