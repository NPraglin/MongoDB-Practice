const express = require('express');
const bodyParser = require('body-parser');

// Interchangeable
// Mongoose = './mongoose'
// Mongo Standard = './mongo'
const mongoPractice = require('./mongoose');

// Connects to 'products_test' and writes under 'products'
const app = express();

app.use(bodyParser.json());

// POST new record
app.post('/products', mongoPractice.createProduct);

// Gets all records
app.get('/products', mongoPractice.getProducts);

app.listen(3000);