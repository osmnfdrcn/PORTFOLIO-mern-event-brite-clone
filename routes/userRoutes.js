const express = require('express')
const router = express.Router()
const authenticateUser = require('../middlewares/userAuth.js')

const { register, login, verify, me, getUserProfile, logout, update, follow, unfollow, avatarUpload } = require('../controllers/userController/index.js')
router.route('/register').post(register)
router.route('/verify/').post(verify)
router.route('/login').post(login)
router.route('/logout').post(authenticateUser, logout)
router.route('/me').get(authenticateUser, me)
router.route('/me').post(authenticateUser, update)
router.route('/me/upload').post(authenticateUser, avatarUpload)
router.route('/follow').post(authenticateUser, follow)
router.route('/unfollow').post(authenticateUser, unfollow)

router.route('/:id').get(authenticateUser, getUserProfile)


module.exports = router;