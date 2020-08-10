const {Orders, User} = require('../db/models')

const postOrder = async (req, res, next) => {
  try {
    if (Object.keys(req.body).length) {
      const order = await Orders.create({
        employeeName: req.user.employee,
        employeeImage: req.user.image,
        products: Object.values(req.body),
      })
      await order.addUser(req.user.id)
      res.json({message: 'success'})
    }
  } catch (err) {
    next(err)
  }
}

const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Orders.findAll({
      // include: [
      //   {
      //     model: User,
      //     as: 'User'
      //   },
      // ],
    })

    res.json(orders)
  } catch (error) {
    res.status(400).send({message: 'error'})
  }
}

const deleteWholeOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id
    const order = await Orders.findOne({where: {id: orderId}})
    if (order) {
      await order.destroy()
      res.status(201).json({message: 'sucess'})
    } else {
      res.status(404).json({err: 'not-found'})
    }
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllOrders,
  postOrder,
  deleteWholeOrder,
}
