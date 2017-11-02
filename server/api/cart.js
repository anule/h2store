const router = require('express').Router();
const { Transaction } = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  return Transaction.findOne({
    where: {
      userId: req.session.passport.user,
      status: 'Pending'
    }, include: [{all: true
    }]})
    .then(transaction => res.json(transaction))
    .catch(next);
});
