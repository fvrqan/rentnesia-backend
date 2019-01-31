'use strict';
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define('payment', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  payment.associate = function(models) {
    // associations can be defined here
  };
  return payment;
};