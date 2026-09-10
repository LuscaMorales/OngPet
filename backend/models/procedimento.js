'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Procedimento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     
    static associate(models) {
      Procedimento.belongsTo(models.ProcedimentoAnimal);
    }
    */
  }
  Procedimento.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.ENUM(
        'Consulta',
        'Cirurgia',
        'Exame',
        'Castração',
        'Outro'
      ),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Procedimento',
  });
  return Procedimento;
};