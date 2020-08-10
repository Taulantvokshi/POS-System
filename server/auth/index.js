const router = require('express').Router()
const User = require('../db/models/user')
module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    if (req.user) {
      res.status(400).send('user is here')
    } else {
      const user = await User.findOne({where: {employee: req.body.employee}})
      if (!user) {
        res.status(401).send('Wrong username and/or password')
      } else if (!user.correctPassword(req.body.password)) {
        res.status(401).send('Wrong username and/or password')
      } else {
        req.login(user, err => (err ? next(err) : res.json(user)))
      }
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create({...req.body, image: 'images/avatar.jpg'})
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  res.json(req.user)
})

router.use('/google', require('./google'))
