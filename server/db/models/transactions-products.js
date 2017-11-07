const Sequelize = require('sequelize')
const db = require('../db')

const TransactionsProducts = db.define('transactions-products', {
  numOrdered: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  }
})

TransactionsProducts.addHook('afterUpdate',
  TransactionsProducts.destroy({
    where: {
      numOrdered: 0
    }
  })
);

TransactionsProducts.addHook('afterCreate',
  TransactionsProducts.destroy({
    where: {
      numOrdered: 0
    }
  })
);

module.exports = TransactionsProducts;
