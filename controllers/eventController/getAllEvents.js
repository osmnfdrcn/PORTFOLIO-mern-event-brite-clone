const Event = require('../../models/Event.js')
const { StatusCodes } = require('http-status-codes')
const BadRequestError = require('../../errors/bad-request.js')


//filter'a search eklenecek

const getAllEvents = async (req, res) => {
  const { city, isOnline, category, tag, language, limit, skip } = req.query

  let match = {}
  if (city) { match["location.city"] = city }
  if (tag) { match.tags = tag }
  if (category) { match.category = category }
  if (isOnline) { match.isOnline = isOnline }
  if (language) { match.language = language }

  const allEvents = await Event.find(match, {
    attendees: 0,
    __v: 0
  })
  const events = await Event.find(match, {
    attendees: 0,
    __v: 0,
  }).limit(limit).skip(skip)

  const numberOfEvents = allEvents.length
  const numOfPages = Math.ceil(numberOfEvents / limit)

  res.status(StatusCodes.OK).json({ events, numberOfEvents, numOfPages })
}
module.exports = getAllEvents