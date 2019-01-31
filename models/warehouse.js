'use strict';
module.exports = (sequelize, DataTypes) => {
  const warehouse = sequelize.define('warehouse', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  warehouse.associate = function(models) {
    // associations can be defined here
  };
  return warehouse;
};