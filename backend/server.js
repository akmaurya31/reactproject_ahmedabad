const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//mongo "mongodb+srv://cluster0-h1nki.mongodb.net/test"  --username maahidb

// const uri = process.env.ATLAS_URI;
const uri = "mongodb+srv://maahidb:efast-4ac@cluster0-h1nki.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
let productsRouter = require('./routes/product');
let candidatesRouter = require('./routes/candidates');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/candidates', candidatesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
