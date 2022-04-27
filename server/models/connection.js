'use strict';
const {
  Model
} = require('sequelize');

exports.structure = (DataTypes) => {
  return {
  }
}

module.exports = (sequelize, DataTypes) => {
  class Connection extends Model {
    static associate(models) {
      Connection.hasMany(Connection, {
        onDelete: 'CASCADE',
        as: 'billing_connections',
        foreignKey: { allowNull: true, name: 'billing_connection_id' }
      });
      Connection.belongsTo(Connection, {
        onDelete: 'CASCADE',
        as: 'billing_connection',
        foreignKey: { allowNull: true, name: 'billing_connection_id' }
      });
      Connection.hasMany(models.payments, {
        onDelete: 'CASCADE',
        foreignKey: { name: 'connection_id', allowNull: false}
      });
      Connection.hasMany(models.appointments, {
        onDelete: 'CASCADE',
        foreignKey: { name: 'connection_id', allowNull: false}
      });
      Connection.hasMany(models.messages, {
        onDelete: 'CASCADE',
        foreignKey: { name: 'connection_id', allowNull: false}
      });
    }
  }
  Connection.init({
    name: { type: DataTypes.STRING, allowNull: false },
    surname: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    notes: { type: DataTypes.STRING, allowNull: true },
    type: {
      allowNull: false,
      type: DataTypes.ENUM,
      values: ['client','mother', 'father', 'grandma', 'grandpa', 'other'],
      defaultValue: 'client'
    }
  }, { sequelize, modelName: 'connections', ...require('../config/utils').db_default_options() });
  return Connection;
};