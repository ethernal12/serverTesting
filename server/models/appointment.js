'use strict';
const {
  Model, Sequelize
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      Appointment.hasMany(models.messages, {allowNull: true,foreignKey: "appointment_id", onDelete: 'CASCADE'});
      Appointment.belongsTo(models.connections, {foreignKey: "connection_id", onDelete: 'CASCADE'});
    }
  }
  Appointment.init({
    title: {
      allowNull: false,
      type: Sequelize.ENUM,
      values: ['Inštrukcije programiranja', 'Inštrukcije matematike', 'Inštrukcije fizike', 'Reševanje nalog', 'Izdelava projekta', 'Svetovanje'],
      defaultValue: 'Inštrukcije programiranja'
    },
    description: DataTypes.STRING,
    notes: DataTypes.STRING,
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    datetime: { type: DataTypes.DATE, allowNull: false },
    calendar_id: { type: DataTypes.STRING, allowNull: false },
  }, {
    sequelize, modelName: 'appointments' , ...require('../config/utils').db_default_options()});
  return Appointment;
};