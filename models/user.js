"use strict";

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      user_type: {
        type: DataTypes.ENUM("staff", "customer"),
        allowNull: false
      }, // user_photo: { type: DataTypes.STRING(100) },
      username: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
        validate: { len: [1, 10], isLowercase: true, notEmpty: true }
      },
      first_name: {
        allowNull: false,
        type: DataTypes.STRING(30),
        defaultValue: ""
        // validate: { len: [0, 200], isAlphanumeric: false }
      },
      last_name: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: ""
        // validate: { len: [0, 200], isAlphanumeric: false }
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
      address: { allowNull: true, type: DataTypes.STRING(100) },
      city: { allowNull: true, type: DataTypes.STRING(50) },
      zip_code: { allowNull: true, type: DataTypes.STRING(6) },
      phone: { allowNull: true, type: DataTypes.STRING(20) }
      // status: {
      //   allowNull: false,
      //   defaultValue: 'active',
      //   type: DataTypes.STRING(32)
      // }
    },
    {}
  );

  user.associate = function(models) {
    // associations can be defined here
  };

  return user;
};
