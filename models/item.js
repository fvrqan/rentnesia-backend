'use strict';
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('item', {
    item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    item_photo: { type: DataTypes.STRING(100) },
    name: { type: DataTypes.STRING(100), allowNull: false },
    description: { type: DataTypes.STRING(100), allowNull: false },
    quantity: { type: DataTypes.STRING(100), allowNull: false },
    price_per_unit: { type: DataTypes.STRING(100), allowNull: false }
  }, {});
  item.associate = function(models) {
    // associations can be defined here
  };
  return item;
};