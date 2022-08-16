const User = require('../../models/User.js')
const { StatusCodes } = require('http-status-codes')
const BadRequestError = require('../../errors/bad-request.js')

const follow = async (req, res) => {
  const { _id } = req.body
  const user = await User.findById(_id)

  if (req.user.status === 'Pending') { throw new BadRequestError('You should activate your account first.') }
  if (req.user._id.toString() === _id) { throw new BadRequestError('You cannot follow yourself.') }
  if (!user) { throw new BadRequestError('No User') }
  const isFollowing = req.user.followings.filter((f) => f.user.toString() === user._id.toString())
  if (isFollowing.length) { throw new BadRequestError('You are already following the user') }
  req.user.followings.push({
    user: user._id,
  })
  await req.user.save()

  user.followers.push({
    user: req.user._id,
  })

  await user.save()
  res.status(StatusCodes.OK).send("You are following the user")

}

module.exports = follow