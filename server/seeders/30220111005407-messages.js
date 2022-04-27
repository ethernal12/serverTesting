'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('messages', [
      {send_at: new Date(), title: "This is huge title that bellongs to here so wasup???", body: "body", sms_state: 'waiting', email_state: 'sent', notes: 'notes', appointment_id: 2, connection_id: 2},
      {send_at: new Date(), title: "This is huge title that bellongs to here so wasup???", body: "body", sms_state: 'waiting', email_state: 'sent', notes: 'notes', appointment_id: 2, connection_id: 2},
      {send_at: new Date(), title: "This is huge title that bellongs to here so wasup???", body: "body", sms_state: 'waiting', email_state: 'sent', notes: 'notes', appointment_id: 1, connection_id: 1},
      {send_at: new Date(), title: "This is huge title that bellongs to here so wasup???", body: "body", sms_state: 'waiting', email_state: 'sent', notes: 'notes', appointment_id: 1, connection_id: 1},
      {send_at: new Date(), title: "This is huge title that bellongs to here so wasup???", body: "body", sms_state: 'waiting', email_state: 'sent', notes: 'notes', appointment_id: 1, connection_id: 1},
      {send_at: new Date(), title: "This is huge title that bellongs to here so wasup???", body: "body", sms_state: 'waiting', email_state: 'sent', notes: 'notes', appointment_id: 1, connection_id: 1},
      {send_at: new Date(), title: "This is huge title that bellongs to here so wasup???", body: "body", sms_state: 'waiting', email_state: 'sent', notes: 'notes', appointment_id: 1, connection_id: 1},
    ].map(obj=> ({...obj, created_at: new Date, updated_at: new Date})), {});
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('messages', null, {});
  }
};