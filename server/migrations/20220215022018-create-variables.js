'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('variables',
      require('../models').variables.rawAttributes
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('variables');
  }
};