'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Animal.hasMany(models.Vacina);
      Animal.hasMany(models.Procedimento);
    }
  }
  Animal.init({
    nome: DataTypes.STRING,
    raca: DataTypes.STRING,
    dataChegada: DataTypes.DATEONLY,
    nascimento: DataTypes.DATEONLY,
    idVacina: DataTypes.INTEGER,
    idProcedimento: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Animal',
  });
  return Animal;
};