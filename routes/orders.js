const express = require('express')
const router = express.Router()

const OrderController = require('../controllers/OrderController')
// const isAuthenticated = require('../middlewares').isAuthenticated

router.route('/:id').post(OrderController.createOrderById)
// isAuthenticated, put in router get after test

module.exports = router
