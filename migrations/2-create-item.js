'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('items', {
      item_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      item_photo: { type: Sequelize.STRING(100) },
      name: { type: Sequelize.STRING(100), allowNull: false },
      description: { type: Sequelize.STRING(100), allowNull: false },
      quantity: { type: Sequelize.STRING(100), allowNull: false },
      price_per_unit: { type: Sequelize.STRING(100), allowNull: false },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('items')
  }
}
