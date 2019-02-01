const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({
    message: 'Rentnesia Area'
  })
})

module.exports = router
