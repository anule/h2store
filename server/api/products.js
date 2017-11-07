const router = require('express').Router();
const { Product, Review } = require('../db/models');
module.exports = router;

// All products
router.get('/', (req, res, next) => {
  Product.findAll()
    .then(products => res.json(products))
    .catch(next);
});

// Single product
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Product.findOne({
    where: { id: id},
    include: [Review]
  })
    .then(product => res.json(product))
    .catch(next);
});
