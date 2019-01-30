'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_type: { type: DataTypes.ENUM('Admin', 'User') },
      profile_photo: { type: DataTypes.STRING(100) },
      full_name: {
        allowNull: false,
        type: DataTypes.STRING(30),
        defaultValue: '',
        validate: { len: [0, 200], isAlphanumeric: true, notEmpty: true }
      },
      email: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
        validate: {
          len: [1, 100],
          isEmail: true,
          isLowercase: true,
          notEmpty: true
        }
      },
      password: { type: DataTypes.STRING(100), allowNull: false },
      username: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true,
        validate: {
          len: [1, 10],
          isLowercase: true,
          notEmpty: true
        }
      },
      address: { allowNull: true, type: DataTypes.STRING(100) },
      city: { allowNull: true, type: DataTypes.STRING(50) },
      zip_code: { allowNull: false, type: DataTypes.STRING(6) },
      phone: { allowNull: false, type: DataTypes.STRING(20) },
      status: {
        allowNull: false,
        defaultValue: 'active',
        type: DataTypes.STRING(32)
      }
    },
    {}
  )

  User.associate = function(models) {
    // associations can be defined here
  }
  return User
}
