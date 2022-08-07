const Event = require('../../models/Event.js')
const Tag = require('../../models/Tag.js')
const { StatusCodes } = require('http-status-codes')
const BadRequestError = require('../../errors/bad-request.js')

const getTag = async (req, res) => {
  const { id } = req.params

  const { tag } = await Tag.findById(id)
  if (!tag) { throw new BadRequestError('Tag couldnt find') }
  const events = await Event.find({ tags: tag })
  res.status(StatusCodes.OK).json({ events })
}

module.exports = getTag

// belirli bir tag'e ait event'leri fetch etme islemini, getAllEvents'te filter islemi ile hallettik.
// burada events.length 'i kullanrak en populer tag'leri siralyabiliriz.