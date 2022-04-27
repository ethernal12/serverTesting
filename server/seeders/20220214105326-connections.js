'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('connections', [
      {billing_connection_id: 1, name:"Branka", surname:"Jansa", email: "google@gmail.com", phone: "240885"},
      {billing_connection_id: 1, name:"Janez", surname:"Kera", email: "facebook@gmail.com", phone: "0885"},
      {billing_connection_id: 1, name:"Milos", surname:"Cena", email: "amazon@gmail.com", phone: "885"},
      {billing_connection_id: 2, name:"Nika", surname:"Repa", email: "elektro@gmail.com", phone: "240885"},
      {billing_connection_id: 2, name:"Katja", surname:"Lev", email: "adidas@gmail.com", phone: "0885"},
      {billing_connection_id: 2, name:"Jernej", surname:"Orel", email: "puma@gmail.com", phone: "885"},
      {billing_connection_id: 3, name:"Slavko", surname:"Krava", email: "nike@gmail.com", phone: "240885"},
      {billing_connection_id: 3, name:"Miha", surname:"Zaba", email: "instagram@gmail.com", phone: "0885"},
      {billing_connection_id: 3, name:"Luka", surname:"Zajec", email: "snapchat@gmail.com", phone: "885"},
      {billing_connection_id: 4, name:"Sara", surname:"Srna", email: "tiktok@gmail.com", phone: "240885"},
      {billing_connection_id: 1, name:"Manka", surname:"Medved", email: "merkur@gmail.com", phone: "0885"},
      {billing_connection_id: 1, name:"Uros", surname:"Jarc", email: "obi@gmail.com", phone: "885"}
    ].map(obj=> ({...obj, created_at: new Date, updated_at: new Date})), {});
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('connections', null, {});
  }
};