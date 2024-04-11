'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProcedimentoAnimals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.DATEONLY
      },
      idProcedimento: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'procedimentos',
            key: 'id'
          },
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      idAnimal: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'animals',
            key: 'id'
          },
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProcedimentoAnimals');
  }
};