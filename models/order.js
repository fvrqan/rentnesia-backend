'use strict'
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    'order',
    {
      address: { allowNull: true, type: DataTypes.STRING(100) },
      pickup_time: { type: DataTypes.DATE, allowNull: false },
      notes: { type: DataTypes.STRING(100), allowNull: true },
      payment: { type: DataTypes.STRING(100), allowNull: false },
      // promo_code: { type: DataTypes.STRING(12), allowNull: true }
    },
    {}
  )
  order.associate = function(models) {
    // associations can be defined here
  }
  return order
}
