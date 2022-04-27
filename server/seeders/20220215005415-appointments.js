'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('appointments', [
      {notes: 'this is notes', description: "some description", connection_id: 1, datetime: new Date(), title: "Inštrukcije programiranja", quantity: 1, price: 39.8, calendar_id: "233243"},
      {notes: 'this is notes', description: "some description", connection_id: 2, datetime: new Date(), title: "Inštrukcije matematike", quantity: 3, price: 39.8, calendar_id: "233243"},
      {notes: 'this is notes', description: "some description", connection_id: 3, datetime: new Date(), title: "Inštrukcije fizike", quantity: 2, price: 39.8, calendar_id: "233243"},
      {notes: 'this is notes', description: "some description", connection_id: 1, datetime: new Date(), title: "fiy", quantity: 1, price: 39.8, calendar_id: "233243"},
      {notes: 'this is notes', description: "some description", connection_id: 2, datetime: new Date(), title: "mat", quantity: 1, price: 39.8, calendar_id: "233243"},
      {notes: 'this is notes', description: "some description", connection_id: 3, datetime: new Date(), title: "mat", quantity: 1, price: 39.8, calendar_id: "233243"},
      {notes: 'this is notes', description: "some description", connection_id: 1, datetime: new Date(), title: "prog", quantity: 1, price: 39.8, calendar_id: "233243"},
      {notes: 'this is notes', description: "some description", connection_id: 2, datetime: new Date(), title: "prog", quantity: 1, price: 39.8, calendar_id: "233243"},
      {notes: 'this is notes', description: "some description", connection_id: 3, datetime: new Date(), title: "prog", quantity: 1, price: 39.8, calendar_id: "233243"},
      {notes: 'this is notes', description: "some description", connection_id: 1, datetime: new Date(), title: "prog", quantity: 1, price: 39.8, calendar_id: "233243"},
    ].map(obj=> ({...obj, created_at: new Date, updated_at: new Date})), {});
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('appointments', null, {});
  }
};