const express = require('express')
const router = express.Router()

router.use('/reg',require('./reg/index.js'))

module.exports = router