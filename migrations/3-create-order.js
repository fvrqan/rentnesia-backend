'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      address: { allowNull: true, type: Sequelize.STRING(100) },
      pick_up: { type: Sequelize.DATE, allowNull: false },
      // payment: { type: Sequelize.STRING(100), allowNull: false },
      notes: { type: Sequelize.STRING(100), allowNull: true },
      // promo_code: { type: Sequelize.STRING(12), allowNull: true },
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
    return queryInterface.dropTable('orders')
  }
}
