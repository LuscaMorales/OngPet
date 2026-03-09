'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: { type: DataTypes.STRING, allowNull: false },
    birth_date: { type: DataTypes.DATE, allowNull: false },
    cpf: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    role: {
      type: DataTypes.ENUM('admin','funcionario','veterinario','viewer','recepcao'),
      allowNull: false
    },
    password: { type: DataTypes.STRING, allowNull: false }
  }, {});

  User.beforeCreate(async (user) => {
    if (user.password){
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    }
  });

  User.beforeUpdate(async (user) => {
    if (user.changed('password')){
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    }
  });

  return User;
};