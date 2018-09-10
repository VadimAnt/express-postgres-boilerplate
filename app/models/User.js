const { Model, DataTypes } = require('sequelize');

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init(schema, { sequelize });
  }
};

const schema = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    isEmail: true,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [0, 50],
    },
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [0, 50],
    },
  },
};
