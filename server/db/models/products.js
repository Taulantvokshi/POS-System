const Sequelize = require('sequelize')
const db = require('../db')

const Products = db.define('products', {
  name: {
    type: Sequelize.STRING,

    validate: {
      notEmpty: {
        args: true,
        msg: 'enter value'
      },
      is: {
        args: [/^[a-z]+$/i],
        msg: 'letters only'
      },
      len: {
        args: [4, 12],
        msg: 'different name please'
      }
    }
  },
  image: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'enter value'
      },
      not: {
        args: ['[a-z]', 'i'],
        msg: 'only numbers'
      },

      priceLimit(value) {
        if (value) {
          if (Number(value) > 100) {
            throw new Error('smaller price')
          }
        }
      },
      HigherPriceLimit(value) {
        if (value) {
          if (Number(value) < 1) {
            throw new Error('Higher price please')
          }
        }
      }
    }
  },
  quantity: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'enter value'
      },
      not: {
        args: ['[a-z]', 'i'],
        msg: 'only numbers'
      },

      amountLimit(value) {
        if (value) {
          if (Number(value) > 100) {
            throw new Error('smaller amount')
          }
        }
      },
      HigherAmountLimit(value) {
        if (value) {
          if (Number(value) <= 0) {
            throw new Error('Heigher amount please')
          }
        }
      }
    }
  },
  type: {
    type: Sequelize.STRING
  }
})

module.exports = Products
