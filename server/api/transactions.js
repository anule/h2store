const router = require('express').Router();
const { Transaction } = require('../db/models');
module.exports = router;

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Transaction.findById(id)
    .then(transaction => res.json(transaction))
    .catch(next);
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  Transaction.destroy({where: {
    id: id}
  })
    .then(() => res.sendStatus(201))
    .catch(next);
});

