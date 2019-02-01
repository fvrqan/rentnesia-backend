'use strict'
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define(
    'item',
    {
      id_owner: { type: DataTypes.INTEGER, allowNull: false },
      images: { type: DataTypes.STRING, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      quantity: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.STRING, allowNull: false } 
    },
    {}
  )
  item.associate = function (models) {    
    models.item.belongsTo(models.user, {   
      foreignKey: "owner",
      targetKey: "id"
    });
  };
  return item
}
