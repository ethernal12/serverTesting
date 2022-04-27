'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('payments',
      require('../models').payments.rawAttributes,
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('payments');
  }
};