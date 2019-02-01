const express = require('express')
const router = express.Router()

const ItemController = require('../controllers/ItemController')
// const isAuthenticated = require('../middlewares').isAuthenticated

router
  .get('/', ItemController.getItem) // isAuthenticated, put in router get after test
  .get('/', ItemController.getItem)


router
.route('/items/:id')
.post(ItemController.createItemById)
  .get(ItemController.getItemById)
  .put(ItemController.updateItemById)
  .delete(ItemController.deleteItemById)

module.exports = router
