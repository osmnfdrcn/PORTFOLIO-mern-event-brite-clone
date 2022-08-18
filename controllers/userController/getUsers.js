const User = require('../../models/User.js')
const { StatusCodes } = require('http-status-codes')
const BadRequestError = require('../../errors/bad-request.js')

const getUsers = async (req, res) => {
  const { criteria, limit, skip } = req.query
  console.log(skip);
  let allUsers = []
  let users = []
  let totalUsers = 0
  let numOfPages = 0

  if (criteria === 'followings') {
    allUsers = await User.find({
      "followers.user": req.user._id
    })

    users = await User.find({
      "followers.user": req.user._id
    }, {
      email: 0,
      __v: 0,
      followers: 0,
      followings: 0,
      password: 0,
      status: 0,
      verification: 0,
      tokens: 0,
      updatedAt: 0,
      address: 0
    }).limit(limit).skip(skip)

  }
  if (criteria === 'followers') {
    allUsers = await User.find({
      "followings.user": req.user._id
    })

    users = await User.find({
      "followings.user": req.user._id
    }, {
      email: 0,
      __v: 0,
      followers: 0,
      followings: 0,
      password: 0,
      status: 0,
      verification: 0,
      tokens: 0,
      updatedAt: 0,
      address: 0
    }).limit(limit).skip(skip)

  }
  totalUsers = allUsers.length
  numOfPages = Math.ceil(totalUsers / limit)

  res.status(StatusCodes.OK).json({ users, totalUsers, numOfPages, skip })

}

module.exports = getUsers