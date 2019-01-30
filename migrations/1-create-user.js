'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      user_type: {
        type: Sequelize.ENUM('admin', 'customer'),
        allowNull: false
      },
      profile_photo: { type: Sequelize.STRING(100) },
      username: {
        type: Sequelize.STRING(12),
        allowNull: false,
        unique: true
      },
      first_name: {
        type: Sequelize.STRING(30),
        allowNull: false,
        defaultValue: '',
        validate: { len: [0, 200], isAlphanumeric: true }
      },
      last_name: {
        type: Sequelize.STRING(30),
        allowNull: false,
        defaultValue: '',
        validate: { len: [0, 200], isAlphanumeric: true }
      },
      email: {
        type: Sequelize.STRING(64),
        allowNull: false,
        unique: true
      },
      password: { type: Sequelize.STRING(100), allowNull: false },

      address: { type: Sequelize.STRING(100), allowNull: true },
      city: { type: Sequelize.STRING(50), allowNull: true },
      zip_code: { type: Sequelize.STRING(6), allowNull: false },
      phone: { type: Sequelize.STRING(20), allowNull: false },
      status: {
        type: Sequelize.STRING(32),
        allowNull: false,
        defaultValue: 'active'
      },
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
    return queryInterface.dropTable('users')
  }
}
