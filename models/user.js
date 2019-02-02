"use strict";

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      user_type: {
        type: DataTypes.ENUM("staff", "customer"),
        allowNull: false
      },
      profile_picture: { type: DataTypes.STRING },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { len: [1, 15], isLowercase: true, notEmpty: true }
      },
      first_name: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: ''
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ''
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [1, 20],
          isEmail: true,
          isLowercase: true,
          notEmpty: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [1, 20], isPassword: true }
      },
      country: { allowNull: true, type: DataTypes.STRING },
      province: { allowNull: true, type: DataTypes.STRING },
      city: { allowNull: true, type: DataTypes.STRING },
      phone: { allowNull: true, type: DataTypes.STRING },
      status: {
        allowNull: true,
        defaultValue: 'active',
        type: DataTypes.STRING
      }
    },
    {}
  );

  user.associate = function(models) {
    models.user.hasMany(models.item, {
      foreignKey: 'id_owner',
      sourceKey: 'id'
    })
    models.user.hasMany(models.user_item, {
      foreignKey: 'id_user',
      sourceKey: 'id'
    })
  }

  return user;
};
