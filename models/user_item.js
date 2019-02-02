'use strict'
module.exports = (sequelize, DataTypes) => {
  const user_item = sequelize.define(
    'user_item',
    {
      id_user: { type: DataTypes.INTEGER, allowNull: false },
      id_item: { type: DataTypes.INTEGER, allowNull: false },
      status: DataTypes.BOOLEAN
    },
    {}
  )
  user_item.associate = function(models) {
    models.user_item.belongsTo(models.user, {
      onDelete: 'CASCADE',
      foreignKey: 'id_user',
      targetKey: 'id'
    })
    models.user_item.belongsTo(models.item, {
      onDelete: 'CASCADE',
      foreignKey: 'id_item',
      targetKey: 'id'
    })
  }
  return user_item
}
