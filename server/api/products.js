const router = require('express').Router()
const {getProductsByType} = require('../controller/getProducts')
const {Products} = require('../db/models')

module.exports = router

const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

aws.config.update({
  secretAccessKey: process.env.SecretAccessKey,
  accessKeyId: process.env.AccessKeyId,
  region: 'us-east-1',
})

const s3 = new aws.S3()
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/png'
  ) {
    cb(null, true)
  } else {
    cb(
      new Error('Invalid file type, only JPG, JPEG and PNG is allowed!'),
      false
    )
  }
}

const upload = multer({
  fileFilter,
  limits: {
    files: 1, // allow only 1 file per request
    fileSize: 1024 * 1024 * 10, // 10 MB (max file size)
  },

  storage: multerS3({
    s3: s3,
    bucket: 'pos-system-products',
    acl: 'public-read',
    //contentType: multerS3.AUTO_CONTENT_TYPE,

    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname})
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    },
  }),
})

const singleUpload = upload.single('picture')

router.post('/', (req, res, next) => {
  try {
    singleUpload(req, res, async function () {
      let image = await req.file.location
      try {
        await Products.create({
          image,
          type: 'not-posted',
        })
        res.redirect('/settings/products')
        res.end()
      } catch (error) {
        throw new Error(error)
      }
    })
  } catch (error) {
    res.status(404).send(error)
  }
})

router.get('/image', async (req, res, next) => {
  try {
    const product = await Products.findOne({where: {type: 'not-posted'}})
    res.status(200).json(product)
  } catch (error) {
    throw new Error(error)
  }
})

router.post('/new-product', async (req, res, next) => {
  try {
    const product = await Products.findOne({where: {type: 'not-posted'}})
    const response = await product.update({
      ...req.body,
    })
    res.json(response)
  } catch (error) {
    res.status(401).json(error)
  }
})

router.delete('/remove_product/:id', async (req, res, next) => {
  try {
    const product = await Products.findOne({where: {id: req.params.id}})
    res.status(201).json({message: 'success'})
    product.destroy()
  } catch (error) {
    next(error)
  }
})

router.delete('/', async (req, res, next) => {
  try {
    const product = await Products.findOne({where: {type: 'not-posted'}})
    product.destroy()
  } catch (error) {
    next(error)
  }
})

router.get('/', getProductsByType)
