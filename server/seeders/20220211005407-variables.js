'use strict';

let db = require('../models');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('variables', [
      {key: 'company_name', value: "Inštrukcije matematike, fizike, programiranja - Uroš Jarc s.p."},
      {key: 'company_address', value: "Opekarska cesta 6"},
      {key: 'company_city', value: "Ljubljana"},
      {key: 'company_postal_code', value: "1000"},
      {key: 'company_iban', value: "SI56 0316 0100 0780 595"},
      {key: 'company_url', value: "https://urosjarc.com"},
      {key: 'owner_name', value: "Uroš"},
      {key: 'owner_surname', value: "Jarc"},
      {key: 'owner_email', value: 'jar.fmf@gmail.com'},
      {key: 'owner_phone', value: '051240885'},
      {key: 'appointment_price', value: '0.325'},
      {key: 'appointment_quantity', value: '120'},
      {key: 'options_appointments_title', value: db.appointments.rawAttributes.title.values.join(',')},
      {key: 'options_messages_email_state', value: db.messages.rawAttributes.email_state.values.join(',')},
      {key: 'options_connections_type', value: db.connections.rawAttributes.type.values.join(',')},
    ].map(obj=> ({...obj, created_at: new Date, updated_at: new Date})), {});
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('variables', null, {});
  }
};