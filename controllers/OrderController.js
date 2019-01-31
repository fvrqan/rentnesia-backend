const Order = require('../models').order

// Add new order
exports.createOrderById = async (req, res) => {
  try {
    await Order.create(
      {
        address: req.body.address,
        pick_up: req.body.pick_up,
        notes: req.body.notes
      },
      { where: { id: req.params.id } }
    )
    const order = await Order.findById(req.params.id)
    res.json({ order })
  } catch (error) {
    res.json(error)
  }
}
