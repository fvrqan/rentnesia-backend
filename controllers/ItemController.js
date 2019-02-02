const Item = require('../models').item

// Create pickup item order
exports.createOrderById = async (req, res) => {
  try {
    await Order.create(
      {
        id_owner: userId,
        pickup_time: req.body.pickup_time,
        notes: req.body.notes,
        payment: req.body.payment
      },
      { where: { id: req.params.id } }
    )
    const request = await Order.findById(req.params.id)
    res.json({ request })
  } catch (error) {
    res.json(error)
  }
}

// Add or post new item
exports.createItemById = async (req, res) => {
  try {
    await Item.create(
      {
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price
      },
      { where: { id: req.params.id } }
    )
    const item = await Item.findById(req.params.id)
    res.json({ item })
  } catch (error) {
    res.json(error)
  }
}

// Get items list
exports.getItem = async (req, res) => {
  Item.findAll()
    .then(items => res.json({ items }))
    .catch(err => res.json(err))
}

// Get item by Id
exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id)
    res.json({ item })
  } catch (error) {
    res.json(error)
  }
}

// Delete item by Id
exports.deleteItemById = async (req, res) => {
  try {
    await Item.destroy({ where: { id: req.params.id } })
    res.json('Deleted')
  } catch (err) {
    res.json(err)
  }
}

// Update item by Id
exports.updateItemById = async (req, res) => {
  try {
    await Item.update(
      {
        // item_photo: req.body.item_photo,
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price
      },
      { where: { id: req.params.id } }
    )
    const item = await Item.findById(req.params.id)
    res.json({ item })
  } catch (error) {
    res.json(error)
  }
}
