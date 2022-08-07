const Event = require('../../models/Event.js')
const { StatusCodes } = require('http-status-codes')
const BadRequestError = require('../../errors/bad-request.js')
const User = require('../../models/User.js')
const { sendEventCancelMail } = require('../../emails/account.js')

const cancel = async (req, res) => {
  const { id, message } = req.body

  const event = await Event.findById(id)
  if (!event) { throw new BadRequestError('Event couldnt find') }

  if (req.user._id.toString() != event.owner.toString()) { throw new BadRequestError('You cannot delete any event you dont organize') }

  // https://stackoverflow.com/questions/40140149/use-async-await-with-array-map
  await Promise.all(
    event.attendees.map(async (a) => {
      const attendee = await User.findById(a.user)
      sendEventCancelMail(attendee.email, attendee.firstName, event.title, message)
    })
  )

  await event.delete()
  res.send('Event Deleted')
}

module.exports = cancel