const Event = require('../../models/Event.js')
const { StatusCodes } = require('http-status-codes')
const BadRequestError = require('../../errors/bad-request.js')
const { sendEventAttendanceMail } = require('../../emails/account.js')

const attend = async (req, res) => {
  const { id } = req.params

  const event = await Event.findById(id)
  if (!event) { throw new BadRequestError('Event couldnt find') }

  if (req.user._id.toString() === event.owner.toString()) { throw new BadRequestError('You cannot attend any event you organize') }

  const alreadyAttended = event.attendees.filter(attendee => attendee.user.toString() === req.user._id.toString())
  if (alreadyAttended.length) { throw new BadRequestError('You have already enrolled this event ') }

  event.attendees.push({ user: req.user._id })
  await event.save()
  sendEventAttendanceMail(req.user.email, req.user.firstName, event.title)

  res.status(StatusCodes.OK).json({ event })
}

module.exports = attend