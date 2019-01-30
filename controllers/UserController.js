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

// Delete user by Id
exports.deleteUserById = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } })
    res.json('Deleted')
  } catch (err) {
    res.json(err)
  }
}

// Update User by Id
exports.updateUserById = async (req, res) => {
  try {
    await User.update(
      {
        user_type: req.body.user_type,
        profile_photo: req.body.profile_type,
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        city: req.body.city,
        zip_code: req.body.zip_code,
        phone: req.body.phone
      },
      { where: { id: req.params.id } }
    )
    const user = await User.findById(req.params.id)
    res.json({ user })
  } catch (error) {
    res.json(error)
  }
}
