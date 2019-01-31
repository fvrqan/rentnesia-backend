'use strict'
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define(
    'item',
    {
      id_: { type: DataTypes.STRING(100), allowNull: false },

      // item_photo: { type: DataTypes.STRING(100) },
      name: { type: DataTypes.STRING(100), allowNull: false },
      description: { type: DataTypes.STRING(100), allowNull: false },
      quantity: { type: DataTypes.STRING(100), allowNull: false },
      price: { type: DataTypes.STRING(100), allowNull: false } 
    },
    {}
  )
  item.associate = function(models) {
    // associations can be defined here
  }
  return item
}
