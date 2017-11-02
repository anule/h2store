const router = require('express').Router();
const { Category, Product } = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  Category.findAll()
    .then(categories => res.json(categories))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Category.findOne({where: {
    id: id}, include: [Product]
  })
    .then(category => res.json(category))
    .catch(next);
});

router.get('/:id/products', (req, res, next) => {
  const id = req.params.id;
  Product.findAll({
    where: {
      categoryId: id
    }
  }).then(products => (res.json(products)))
    .catch(next);
})
