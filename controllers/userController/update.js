const User = require('../../models/User.js')
const { StatusCodes } = require('http-status-codes')
const BadRequestError = require('../../errors/bad-request.js')

const update = async (req, res) => {
  const { password } = req.body

  // avatar cloudinary
  const updates = Object.keys(req.body)
  const allowedUpdates = password
    ? ['password']
    : ['firstName', 'lastName', 'email', 'address', 'avatar']

  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) { throw new BadRequestError('Invalid updates') }

  updates.forEach((update) => req.user[update] = req.body[update])
  if (password) { req.user.tokens = [] }
  await req.user.save()
  const user = req.user
  const token = req.token

  res.status(StatusCodes.OK).json({ user, token })

}

module.exports = update