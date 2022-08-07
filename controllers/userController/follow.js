const User = require('../../models/User.js')
const { StatusCodes } = require('http-status-codes')
const BadRequestError = require('../../errors/bad-request.js')

const follow = async (req, res) => {
  const { _id } = req.body
  const user = await User.findById(_id)
  if (!user) { throw new BadRequestError('No User') }
  if (user.status === 'Pending') { throw new BadRequestError('User is not active') }

  const isFollowing = await User.findOne({
    "followers.user": req.user._id,
  })
  if (isFollowing) { throw new BadRequestError('You are already following the user') }

  req.user.followings.push({
    user: user._id,
    firstName: user.firstName,
    lastName: user.lastName
  })
  await req.user.save()

  user.followers.push({
    user: req.user._id,
    firstName: req.user.firstName,
    lastName: req.user.lastName
  })

  await user.save()
  res.status(StatusCodes.OK).send("You are following the user")

}

module.exports = follow