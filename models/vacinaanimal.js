'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VacinaAnimal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      VacinaAnimal.belongsTo(models.Animal);
      VacinaAnimal.hasOne(models.Vacina);
    }
  }
  VacinaAnimal.init({
    data: DataTypes.DATEONLY,
    idAnimal: DataTypes.INTEGER,
    idVacina: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'VacinaAnimal',
  });
  return VacinaAnimal;
};