const router = require('express').Router()
const { User, Transaction, TransactionsProducts, Products } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id, {attributes: ['id', 'email', 'isAdmin']})
    .then(user => res.json(user))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => user.update(req.body))
    .then(result => res.json(result))
    .catch(next);
})

router.get('/:id/orders', (req, res, next) => {
  User.findOne({
    where: {
      id: req.params.id
    }, include: {model: Transaction, include: [{all: true}]}
  })
  .then(user =>
    {res.json(user)})
  .catch(next)
})
