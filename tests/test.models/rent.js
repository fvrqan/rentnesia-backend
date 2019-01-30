'use strict'
module.exports = (sequelize, DataTypes) => {
  const Rent = sequelize.define(
    'Rent',
    {
      item_id: { type: DataTypes.INTEGER, allowNull: false },
      start_rent: { type: DataTypes.DATE, allowNull: false },
      end_rent: { type: DataTypes.DATE, allowNull: false },
      delivery_location: { type: DataTypes.STRING, allowNull: false },
      status: {
        allowNull: false,
        defaultValue: 'available',
        type: DataTypes.STRING(32)
      }
    },
    {}
  )
  Rent.associate = function(models) {
    // associations can be defined here
  }
  return Rent
}
