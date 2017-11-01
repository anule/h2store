const Sequelize = require('sequelize')
const db = require('../db')

const Transaction = db.define('transaction', {
  status: {
    type: Sequelize.ENUM('Pending', 'Ordered', 'Shipped', 'Delivered', 'Cancelled'),
    defaultValue: 'Pending'
  },

})

module.exports = Transaction;
