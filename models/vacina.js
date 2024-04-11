'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vacina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vacina.belongsTo(models.VacinaAnimal);
    }
  }
  Vacina.init({
    nome: DataTypes.STRING,
    laboratorio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vacina',
  });
  return Vacina;
};