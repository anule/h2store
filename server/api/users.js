const router = require('express').Router()
const { User } = require('../db/models')
module.exports = router

/*
  route.use((req, res, next) => {
    if (!req.user || !req.user.isAdmin) return next(err);
    else next();
  })

  -or-

  route.use((req, res, next) => {
    req.isAuthorized = req.user || req.user.isAdmin;
    next();
  })
*/

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
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => user.update(req.body))
    .then(result => res.json(result))
    .catch(next);
})
