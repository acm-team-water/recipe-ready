const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const genRecipes = require('./genRecipes');
const cors = require('cors');

const usersRouter = require('./routes/users');
const invRouter = require('./routes/inventory');
const recRouter = require('./routes/recipes');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

genRecipes.genRecipes();

app.use('/users', usersRouter);
app.use('/inv', invRouter);
app.use('/recipes', recRouter);

dotenv.config();

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});

module.exports = app;
