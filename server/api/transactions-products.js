const router = require('express').Router();
const { TransactionsProducts } = require('../db/models');
module.exports = router;

// All products
router.post('/', (req, res, next) => {
  console.log(req.body)
  return TransactionsProducts.destroy({
    where: {
      transactionId: req.body.transactionId,
      productId: req.body.productId
    }
  })
    .then(() => res.status(202))
    .catch(next);
});

