'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Variable extends Model {
    static associate(models) { }
  }
  Variable.init({
    key: {type: DataTypes.STRING, allowNull: false},
    value: {type: DataTypes.STRING, allowNull: false}
  }, { sequelize, modelName: 'variables', ...require('../config/utils').db_default_options()});
  return Variable;
};