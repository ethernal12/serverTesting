'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('appointments',
      require('../models').appointments.rawAttributes,
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('appointments');
  }
};