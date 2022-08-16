const User = require('../../models/User.js')
const { StatusCodes } = require('http-status-codes')
const BadRequestError = require('../../errors/bad-request.js')

const unfollow = async (req, res) => {
  const { _id } = req.body
  const user = await User.findById(_id)
  if (!user) { throw new BadRequestError('No User') }
  if (req.user.status === 'Pending') { throw new BadRequestError('You should activate your account first.') }


  const isFollowing = req.user.followings.filter((f) => f.user.toString() === user._id.toString())
  if (!isFollowing.length) { throw new BadRequestError('You are already not following the user') }

  req.user.followings = req.user.followings.filter(f => f.user.toString() != user._id.toString())
  await req.user.save()

  user.followers = user.followers.filter(f => f.user.toString() != req.user._id.toString())
  await user.save()

  res.status(StatusCodes.OK).send("You are now not following the user")
}

module.exports = unfollow