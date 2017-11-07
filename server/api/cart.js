const router = require('express').Router();
const { Transaction, TransactionsProducts } = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  return req.session.passport.user
  ? Transaction.findOrCreate({
    where: {
      userId: req.session.passport.user,
      status: 'Pending'
    }, include: [{all: true
    }]})
    .then(transaction => res.json(transaction))
    .catch(next)
  : res.send({});
});

router.post('/', (req, res, next) => {
  Transaction.findOne({
    where: {
      userId: req.session.passport.user,
      status: 'Pending'
    }})
      .then(transaction => TransactionsProducts.create({
        numOrdered: req.body.numOrdered,
        transactionId: transaction.id,
        productId: req.body.id
        }))
      .then(() => res.sendStatus(201))
      .catch(next);
})

router.put('/checkout', (req, res, next) => {
  Transaction.update(
      {status: 'Ordered'},
      {where: {
        id: req.body.transactionId,
      }
    })
    .then(() => res.sendStatus(201))
    .catch(next)
})

router.put('/checkoutguest', (req, res, next) => {
  console.log(req.body);
  Transaction.create({
    status: 'Ordered',
    userId: req.body.id
  }, {returning: true})
    .then(transaction => req.body.products.forEach(product =>
      TransactionsProducts.create(
        {transactionId: transaction.id,
         productId: product.id,
         numOrdered: product.numOrdered
        }))).then(() => res.sendStatus(201))
      .catch(next);
})
