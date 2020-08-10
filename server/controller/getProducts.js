const {Products} = require('../db/models')
const getProductsByType = async (req, res, next) => {
  let key = Object.values(req.query)[0]
  try {
    let products
    switch (key) {
      case 'appetizer':
        products = await Products.findAll({where: {type: 'appetizer'}})
        break
      case 'main':
        products = await Products.findAll({where: {type: 'main'}})
        break
      case 'dessert':
        products = await Products.findAll({where: {type: 'dessert'}})
        break
      default:
        return []
    }
    res.json(products)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getProductsByType
}
