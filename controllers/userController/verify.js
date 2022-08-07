const User = require('../../models/User.js')
const { StatusCodes } = require('http-status-codes')
const BadRequestError = require('../../errors/bad-request.js')

const verify = async (req, res) => {
  const { verificationCode } = req.body

  const user = await User.findOne({ 'verification.code': verificationCode, status: 'Pending' })
  if (!user) { throw new BadRequestError('No user to activate') }
  if (Date.now() > user?.verification?.end) { throw new BadRequestError('Link Expired') }

  user.status = 'Active'
  console.log(user);
  res.status(StatusCodes.OK).json({ user })
  user.verification.code = ''

  user.save()

}

module.exports = verify