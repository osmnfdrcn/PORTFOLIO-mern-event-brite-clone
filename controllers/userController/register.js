const User = require('../../models/User.js')
const { StatusCodes } = require('http-status-codes')
const BadRequestError = require('../../errors/bad-request.js')
const { sendEmailVerificationEmail } = require("../../emails/account.js")

const register = async (req, res) => {
  const { firstName, lastName, email, password, googleId } = req.body
  const userAlreadyExists = await User.findOne({ email })
  if (userAlreadyExists) { throw new BadRequestError('Email already in use') }

  const user = await User.create({ firstName, lastName, email, password, googleId })
  const token = await user.generateAuthToken('register')
  sendEmailVerificationEmail(user.email, user.firstName, user.verification.code)
  res.status(StatusCodes.OK).json({ user, token })

}
module.exports = register