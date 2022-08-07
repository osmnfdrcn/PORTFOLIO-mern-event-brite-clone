const me = async (req, res) => {
  res.send(req.user)
}

module.exports = me