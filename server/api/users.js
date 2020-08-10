const router = require('express').Router()
const {getAllEmployees} = require('../controller/users')
module.exports = router

router.get('/', getAllEmployees)
