const Sequelize = require('sequelize')
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/h2store', {
    logging: false
  }
)
module.exports = db
