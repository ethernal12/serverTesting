'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('payments', [
      {notes: 'this is notes1', amount: 123, payed_at: new Date(), connection_id: 1},
      {notes: 'this is notes2', amount: 123, payed_at: new Date(), connection_id: 1},
      {notes: 'this is notes3', amount: 123, payed_at: new Date(), connection_id: 2},
    ].map(obj=> ({...obj, created_at: new Date, updated_at: new Date})), {});
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('payments', null, {});
  }
};
