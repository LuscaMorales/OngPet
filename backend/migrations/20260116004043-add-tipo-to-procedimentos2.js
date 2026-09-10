'use strict';

const { all } = require('axios');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Procedimentos', 'tipo',{
      type: Sequelize.ENUM(
        'Consulta',
        'Cirurgia',
        'Exame',
        'Castração',
        'Outro'
      ),
      allowNull: false,
      defaultValue: 'Outro',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Procedimentos', 'tipo');
  }
};
