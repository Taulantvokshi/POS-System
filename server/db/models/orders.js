const Sequelize = require('sequelize')
const db = require('../db')

const Orders = db.define('orders', {
  products: {
    type: Sequelize.ARRAY(Sequelize.DataTypes.JSON)
  },
  employeeName: {
    type: Sequelize.STRING
  },
  employeeImage: {
    type: Sequelize.STRING
  }
})

module.exports = Orders
