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

router.post('/:id/review', (req, res, next) => {
  const productId = req.params.id
  Review.create({
    title: req.body.title,
    stars: req.body.stars,
    message: req.body.message,
    userId: req.body.userId,
    productId: productId
  })
  .then(review => res.json(review))
  .catch(next)
})


router.delete('/:id/reviews/:reviewId', (req, res, next) => {
  Review.destroy({
    where: {
      id: req.params.reviewId
    }
  })
  .then(() => Review.findAll({
    where: {
      productId: req.params.id
    }
  }))
  .then(reviews => res.status(204).json(reviews))
  .catch(next)
})
