'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      Payment.belongsTo(models.connections, {foreignKey: "connection_id", onDelete: 'CASCADE'});
      Payment.hasMany(models.messages, {foreignKey: "payment_id", onDelete: 'CASCADE'});
    }
  }
  Payment.init({
    notes: DataTypes.TEXT,
    amount: DataTypes.NUMBER,
    payed_at: DataTypes.DATE,
  }, { sequelize, modelName: 'payments', ...require('../config/utils').db_default_options()});
  return Payment;
};