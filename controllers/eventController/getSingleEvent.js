const Event = require('../../models/Event.js')
const { StatusCodes } = require('http-status-codes')
const BadRequestError = require('../../errors/bad-request.js')

const getSingleEvent = async (req, res) => {
  const { id } = req.params

  const event = await Event.findById(id)
  if (!event) { throw new BadRequestError('Event couldnt find') }
  res.send(event)
}

module.exports = getSingleEvent