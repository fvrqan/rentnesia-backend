"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      user_type: {
        type: Sequelize.ENUM("staff", "customer"),
        allowNull: false
      },
      username: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
      },
      first_name: {
        type: Sequelize.STRING(30),
        allowNull: false,
        defaultValue: ""
      },
      last_name: {
        type: Sequelize.STRING(30),
        allowNull: false,
        defaultValue: ""
      },
      email: {
        type: Sequelize.STRING(64),
        allowNull: false,
        unique: true
      },
      password: { type: Sequelize.STRING(100), allowNull: false },

      address: { type: Sequelize.STRING(100), allowNull: true },
      city: { type: Sequelize.STRING(50), allowNull: true },
      zip_code: { type: Sequelize.STRING(6), allowNull: true },
      phone: { type: Sequelize.STRING(20), allowNull: true },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};
