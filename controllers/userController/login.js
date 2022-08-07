const User = require('../../models/User.js')
const { StatusCodes } = require('http-status-codes')
const BadRequestError = require('../../errors/bad-request.js')
const UnAuthenticatedError = require('../../errors/unauthenticated.js')

const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) { throw new BadRequestError('Please provide all values') }

  const user = await User.findOne({ email })
  if (!user) { throw new UnAuthenticatedError('Invalid credentials') }

  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) { throw new UnAuthenticatedError('Invalid credentials') }

  // if (user.status === 'Pending') { throw new UnAuthenticatedError('Please activate your account!') }

  const token = await user.generateAuthToken('login')

  res.status(StatusCodes.OK).json({ user, token })

}


module.exports = login