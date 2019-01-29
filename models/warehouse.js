'use strict'
module.exports = (sequelize, DataTypes) => {
  const Warehouse = sequelize.define(
    'Warehouse',
    {
      warehouse_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      warehouse_photo: { type: DataTypes.STRING(100) },
      name: { type: DataTypes.STRING(100), allowNull: false },
      address: { type: DataTypes.STRING(100), allowNull: false },
      email: { type: DataTypes.STRING(100), allowNull: false },
      phone: { type: DataTypes.STRING(100), allowNull: false },
      item_id: { type: DataTypes.INTEGER(), allowNull: false }
    },
    {}
  )

  Warehouse.associate = function(models) {
    // associations can be defined here
  }
  return Warehouse
}
