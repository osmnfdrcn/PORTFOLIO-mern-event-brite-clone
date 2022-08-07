const logout = async (req, res) => {
  try {
    console.log(req.user);
    req.user.tokens = []
    await req.user.save()
    res.send()
  } catch (e) {
    res.status(500).send()
  }

}

module.exports = logout