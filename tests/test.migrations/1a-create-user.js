'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User', {
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      user_type: { type: Sequelize.ENUM('Admin', 'User'), allowNull: false },
      profile_photo: { type: Sequelize.STRING(100), allowNull: false },
      first_name: {
        type: Sequelize.STRING(30),
        allowNull: false,
        defaultValue: '',
        validate: { len: [0, 200], isAlphanumeric: true, defaultValue: '' }
      },
      last_name: {
        type: Sequelize.STRING(30),
        allowNull: false,
        defaultValue: '',
        validate: { len: [0, 200], isAlphanumeric: true, defaultValue: '' }
      },
      email: {
        type: Sequelize.STRING(64),
        allowNull: false,
        unique: true
      },
      password: { type: Sequelize.STRING(100), allowNull: false },
      username: {
        type: Sequelize.STRING(12),
        allowNull: false,
        unique: true
      },
      address: { type: Sequelize.STRING(100), allowNull: true },
      city: { type: Sequelize.STRING(50), allowNull: true },
      zip_code: { type: Sequelize.STRING(6), allowNull: false },
      phone: { type: Sequelize.STRING(20), allowNull: false },
      status: {
        type: Sequelize.STRING(32),
        allowNull: false,
        defaultValue: 'active'
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User')
  }
}
