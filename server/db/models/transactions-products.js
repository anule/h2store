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

module.exports = TransactionsProducts;
