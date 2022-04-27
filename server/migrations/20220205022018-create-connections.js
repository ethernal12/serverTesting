'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('connections',
      require('../models').connections.rawAttributes
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('connections');
  }
};