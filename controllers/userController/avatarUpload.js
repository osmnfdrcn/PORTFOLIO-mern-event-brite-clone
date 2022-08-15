
const User = require('../../models/User.js')
const { StatusCodes } = require('http-status-codes')
const BadRequestError = require('../../errors/bad-request.js')
const { cloudinary } = require('../../utils/cloudinary');

const avatarUpload = async (req, res) => {
  const fileStr = req.body.data;
  const uploadResponse = await cloudinary.uploader.upload(fileStr, {
    upload_preset: process.env.CLOUDINARY_REMOTE_FOLDER
  });

  const { public_id, url } = uploadResponse
  req.user.avatar.public_id = public_id
  req.user.avatar.url = url
  await req.user.save()
  const user = req.user
  const token = req.user.tokens[0].token
  res.status(StatusCodes.OK).json({ user, token })

}

module.exports = avatarUpload