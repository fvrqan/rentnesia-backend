const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')
const isAuthenticated = require('../middlewares').isAuthenticated

router.get('/', isAuthenticated, UserController.getUser)

router
  .route('/:id')
  .get(UserController.getUserById)
  // .delete(UserController.deleteUserById)
  // .put(UserController.updateUserById)

module.exports = router
