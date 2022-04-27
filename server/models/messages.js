'use strict';
const {
  Model
} = require('sequelize');

exports.structure = (DataTypes) => {
  return {
  }
}

module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    static associate(models) {
      Messages.belongsTo(models.connections, {
        onDelete: 'CASCADE',
        as: 'connection',
        foreignKey: { allowNull: false, name: 'connection_id' }
      });
      Messages.belongsTo(models.appointments, {
        onDelete: 'CASCADE',
        as: 'appointment',
        foreignKey: { allowNull: true, name: 'appointment_id' }
      });
      Messages.belongsTo(models.payments, {
        onDelete: 'CASCADE',
        as: 'payment',
        foreignKey: { allowNull: true, name: 'payment_id' }
      });
    }
  }
  Messages.init({
    title: { type: DataTypes.STRING, allowNull: false },
    body: { type: DataTypes.STRING, allowNull: false },
    send_at: {type: DataTypes.DATE, allowNull: true},
    sms_state: {
      allowNull: true,
      type: DataTypes.ENUM,
      values: ['waiting', 'sent', 'fail'],
    },
    email_state: {
      allowNull: true,
      type: DataTypes.ENUM,
      values: ['waiting', 'sent', 'fail']
    },
    notes: DataTypes.STRING
  }, { sequelize, modelName: 'messages', ...require('../config/utils').db_default_options() });
  return Messages;
};