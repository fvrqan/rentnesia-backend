'use strict'
module.exports = (sequelize, DataTypes) => {
  const item_pickup = sequelize.define(
    'item_pickup',
    {
      day: {
        type: DataTypes.ENUM(),
        values: [
          'Senin',
          'Selasa',
          'Rabu',
          'Kamis',
          'Jumat',
          'Sabtu ',
          'Minggu'
        ],
        allowNull: false
      },
      start_hour: { type: DataTypes.DATE, allowNull: false },
      end_hour: { type: DataTypes.DATE, allowNull: false },
      venue: { type: DataTypes.STRING, allowNull: false }
    },
    {}
  )
  item_pickup.associate = function(models) {
    models.item_pickup.belongsTo(models.item, {
      onDelete: 'CASCADE',
      foreignKey: 'id_item',
      targetKey: 'id'
    })
  }
  return item_pickup
}
