'use strict'
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    'order',
    {
      address: { allowNull: true, type: DataTypes.STRING(100) },
      pick_up: { type: DataTypes.DATE, allowNull: false },
      // payment: { type: DataTypes.STRING(100), allowNull: false },
      notes: { type: DataTypes.STRING(100), allowNull: true },
      // promo_code: { type: DataTypes.STRING(12), allowNull: true }
    },
    {}
  )
  order.associate = function(models) {
    // associations can be defined here
  }
  return order
}
