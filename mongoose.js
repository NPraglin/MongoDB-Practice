const mongoose = require('mongoose');

const Product = require('./models/product');

const api = require('./api_url');

// Opens up the connection
mongoose.connect(api.url).then(() => {
  console.log('Connected to DB')
}).catch(() => {
  console.log('Something went wrong')
})

// Builds the record from the schema
const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    description: req.body.description
  });
  // Mongoose built in save to save to db
  const result = await createdProduct.save();
  // Confirm
  console.log(result)
  console.log(typeof createdProduct.id)
  res.json(result);
};

// Get's products from db via get request
const getProducts = async (req, res, next) => {
  const products = await Product.find().exec();
  res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;