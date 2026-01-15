'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProcedimentoAnimal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProcedimentoAnimal.belongsTo(models.Animal,{
        foreignKey:"idProcedimento"
      });
     // ProcedimentoAnimal.hasOne(models.Procedimento);
    }
  }
  ProcedimentoAnimal.init({
    data: DataTypes.DATEONLY,
    idProcedimento: DataTypes.INTEGER,
    idAnimal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProcedimentoAnimal',
  });
  return ProcedimentoAnimal;
};