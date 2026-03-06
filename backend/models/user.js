const {Model} = require('sequelize');
const bcrypt = require('bcrypt');
const {Sequelize, DataTypes} = require('sequelize');

class User extends Model{}

User.init(
  {
    fullName:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    role:{
      type: DataTypes.ENUM(
        'admin',
        'funcionario',
        'veterinario',
        'viewer',
        'recepcao'
      ),
      allowNull: false,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
  },
);

User.beforeCreate(async (user) =>{
  if (user.password){
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
});

User.beforeUpdate(async (user) =>{
  if (user.password){
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
});
mudule.exports = User;