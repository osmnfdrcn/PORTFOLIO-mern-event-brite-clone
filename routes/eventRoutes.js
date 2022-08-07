const express = require('express')
const router = express.Router()
const authenticateUser = require('../middlewares/userAuth.js');

const { createEvent, getAllEvents, getSingleEvent, attend, cancel } = require('../controllers/eventController/index.js')

router.route('/').post(authenticateUser, createEvent)
router.route('/').get(getAllEvents)
router.route('/:id').get(getSingleEvent)
router.route('/:id').post(authenticateUser, attend)
router.route('/').delete(authenticateUser, cancel)




module.exports = router;