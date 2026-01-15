'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('VacinaAnimals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.DATEONLY
      },
      idAnimal: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Animals',
            key: 'id'
          },
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      idVacina: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Vacinas',
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
    await queryInterface.dropTable('VacinaAnimals');
  }
};