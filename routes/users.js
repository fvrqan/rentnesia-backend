const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')
// const isAuthenticated = require('../middlewares').isAuthenticated

router.get('/', UserController.getUser)
// isAuthenticated, put in router get after test

router
  .route('/:id')
  .get(UserController.getUserById)
  .delete(UserController.deleteUserById)
  .put(UserController.updateUserById)

module.exports = router
