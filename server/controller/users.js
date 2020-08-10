const {User} = require('../db/models')

const getAllEmployees = async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getAllEmployees
}
