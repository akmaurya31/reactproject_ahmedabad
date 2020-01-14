const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
 Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  console.log("IamProdutADD");
  const product_name = req.body.product_name;
  const product_size = req.body.product_size;

  const newProduct = new Product({
      product_name,
      product_size, 
    
    });

  newProduct.save()
    .then(() => res.json('Product added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;