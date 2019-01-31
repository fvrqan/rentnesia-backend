const Order = require('../models').order

// Add new order
exports.createOrderById = async (req, res) => {
  try {
    await Order.create(
      {
        address: req.body.address,
        pickup_time: req.body.pickup_time,
        notes: req.body.notes,
        payment: req.body.payment
      },
      { where: { id: req.params.id } }
    )
    const order = await Order.findById(req.params.id)
    res.json({ order })
  } catch (error) {
    res.json(error)
  }
}
