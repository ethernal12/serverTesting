'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('messages',
      require('../models').messages.rawAttributes
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('messages');
  }
};