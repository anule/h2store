const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  title: {
    type: Sequelize.STRING,
    defaultValue: 'My Review'
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    max: 5
  },
  stars: {
    type: Sequelize.DECIMAL(2, 1),
    allowNull: false
  },
  message: {
    type: Sequelize.TEXT
  }
})

module.exports = Review;
