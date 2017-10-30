const Sequelize = require('sequelize')
const db = require('../db');

const Category = db.define('category', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }, description: {
    type: Sequelize.TEXT,
    defaultValue: 'Your Go-To Watering Hole'
  }
})

module.exports = Category;
