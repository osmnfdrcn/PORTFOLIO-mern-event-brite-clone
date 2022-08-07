const express = require('express')
const router = express.Router()

const { getTag } = require('../controllers/tags/index.js')


router.route('/:id').get(getTag)


module.exports = router;