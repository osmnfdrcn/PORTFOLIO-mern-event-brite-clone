const Event = require('../../models/Event.js')
const Tag = require('../../models/Tag.js')

const { StatusCodes } = require('http-status-codes')
const BadRequestError = require('../../errors/bad-request.js')

const createEvent = async (req, res) => {
  const event = await Event.create({ ...req.body, owner: req.user._id })

  await Promise.all(
    event.tags.map(async (t) => {
      const tagExists = await Tag.find({ tag: t })

      if (tagExists.length) {
        await Tag.updateOne({ tag: t }, { $push: { events: event._id } })
      } else {
        await Tag.create({ tag: t, events: [event._id] })
      }
    })
  )

  res.send(event)
}
module.exports = createEvent