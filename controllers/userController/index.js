const register = require('./register.js')
const login = require('./login.js')
const verify = require('./verify.js')
const me = require('./me.js')
const getUserProfile = require('./getUserProfile.js')
const logout = require('./logOut.js')
const update = require('./update.js')
const follow = require('./follow.js')
const unfollow = require('./unfollow.js')
const avatarUpload = require('./avatarUpload.js')
const getUsers = require('./getUsers')

module.exports = { register, login, verify, me, getUserProfile, logout, update, follow, unfollow, avatarUpload, getUsers }