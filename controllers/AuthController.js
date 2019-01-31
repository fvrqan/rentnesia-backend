const User = require('../models').user
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.signupUser = async (req, res) => {
  try {
    const SALT_WORK_FACTOR = 5
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR)

    req.body.password = await bcrypt.hash(req.body.password, salt)

    const user = await User.create({
      user_type: req.body.user_type,
      user_photo: req.body.user_photo,
      username: req.body.username,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      city: req.body.city,
      zip_code: req.body.zip_code,
      phone: req.body.phone
    })

    res.status(200).json({ user })
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } })

    if (user === null) {
      return res.json('Email NOT Found!')
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password)

    if (!validPassword) {
      return res.json(`Password NOT Valid ! ${validPassword}`)
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.user_type },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )
    res.json({ message: "You're logged in", name: user.first_name, token })
  } catch (error) {
    res.json(error)
  }
}
