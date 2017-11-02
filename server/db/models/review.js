const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  title: {
    type: Sequelize.STRING,
    defaultValue: 'My Review'
  },
  date: {
    type: Sequelize.DATEONLY,
    defaultValue: Sequelize.NOW
  },
  stars: {
    type: Sequelize.DECIMAL(2, 1),
    allowNull: false,
    max: 5
  },
  message: {
    type: Sequelize.TEXT
  }
})

module.exports = Review;
