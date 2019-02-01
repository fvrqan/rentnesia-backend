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
        type: Sequelize.ENUM('staff', 'customer'),
        allowNull: false
      }, profile_picture: {
        type: Sequelize.STRING,
        allowNull: t
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: { type: Sequelize.STRING, allowNull: false },

      address: { type: Sequelize.STRING allowNull: true },
      phone: { type: Sequelize.STRING, allowNull: false },
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
