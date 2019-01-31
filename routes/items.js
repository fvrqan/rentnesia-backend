const express = require('express')
const router = express.Router()

const ItemController = require('../controllers/ItemController')
// const isAuthenticated = require('../middlewares').isAuthenticated

router.get('/', ItemController.getItem)
// isAuthenticated, put in router get after test

router
  .route('/:id')
  .get(ItemController.getItemById)
  .delete(ItemController.deleteItemById)
  .put(ItemController.updateItemById)
  .post(ItemController.createItemById)

module.exports = router
