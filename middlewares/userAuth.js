const jwt = require('jsonwebtoken')
const { UnAuthenticatedError, BadRequestError } = require("../errors/index.js")
const User = require('../models/User.js')

const auth = async (req, res, next) => {

  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    console.log(token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

    if (!user) {
      throw new UnAuthenticatedError('Invalid credentials')
    }

    req.token = token
    req.user = user
    next()
  } catch (e) {
    throw new UnAuthenticatedError('Authentication invalid')
  }
}
module.exports = auth;
