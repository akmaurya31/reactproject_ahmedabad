const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  product_name: { type: String, required: true },
  product_size: { type: String, required: true },
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;