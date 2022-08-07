const User = require('../../models/User.js')
const { StatusCodes } = require('http-status-codes')
const BadRequestError = require('../../errors/bad-request.js')

const getUserProfile = async (req, res) => {
  const { id } = req.params
  console.log(id);

  const user = await User.findById(id)
  if (!user) { throw new BadRequestError('User couldnt find') }
  res.send(user)
}

module.exports = getUserProfile