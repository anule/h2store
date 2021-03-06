const router = require('express').Router();
const { TransactionsProducts } = require('../db/models');
module.exports = router;

// All products
router.put('/', (req, res, next) => {
  return TransactionsProducts.destroy({
    where: {
      transactionId: req.body.transactionId,
      productId: req.body.productId
    }
  })
    .then(() => res.sendStatus(202))
    .catch(next);
});

router.put('/update', (req, res, next) => {
  TransactionsProducts.update(
    {numOrdered: req.body.quantity},
    {where: {
      transactionId: req.body.transactionId,
      productId: req.body.productId
    }
  })
    .then(() => res.sendStatus(202))
    .catch(next);
})

