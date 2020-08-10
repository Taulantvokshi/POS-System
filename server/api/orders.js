const router = require('express').Router()
const {
  getAllOrders,
  postOrder,
  deleteWholeOrder
} = require('../controller/orders')
module.exports = router

// Post new Order -info- controller/order.js
router.post('/', postOrder)
// Get all orders -info- controller/order.js
router.get('/', getAllOrders)
//Delete one whole order
router.delete('/:id', deleteWholeOrder)
