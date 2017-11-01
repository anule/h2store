const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  //Add allowNull: false validation
  price: {
    type: Sequelize.DECIMAL(12, 2)
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: 'https://maxcdn.icons8.com/Share/icon/p1em/Industry//water1600.png'
  }
})

module.exports = Product;
