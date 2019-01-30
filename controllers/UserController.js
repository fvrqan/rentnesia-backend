const User = require('../models').user

// Get users list
exports.getUser = async (req, res) => {
  User.findAll()
    .then(users => res.json({ users }))
    .catch(err => res.json(err))
}

// Get user by Id
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.json({ user })
  } catch (error) {
    res.json(error)
  }
}
