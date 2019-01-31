const Item = require('../models').item

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
