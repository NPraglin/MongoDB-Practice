const mongoose = require('mongoose');

// Mongoose schema/record builder
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: {type: String, required: true}
  
});

module.exports = mongoose.model('Product', productSchema)