const Sequelize = require('sequelize')
const db = require('../db')
const TransactionsProducts = require('./transactions-products')

const Transaction = db.define('transaction', {
  status: {
    type: Sequelize.ENUM('Pending', 'Ordered', 'Shipped', 'Delivered', 'Cancelled'),
    defaultValue: 'Pending'
  },
})

Transaction.addHook('beforeDestroy', (transaction) => {
  const { id } = transaction;
  TransactionsProducts.destroy({
    where: {
      transactionId: id
    }
  }).then(res => res.send('transaction products destroyed'));
})

// export const deleteNulls = id => {
//   TransactionsProducts.findAll({
//     where: {
//       transactionId: id
//     }
//   }).then(
//     res => console.log(res)
//   )

// }

module.exports = Transaction;
