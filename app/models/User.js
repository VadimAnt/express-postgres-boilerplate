const { Model } = require('sequelize');
const userSchema = require('../../database/schema/User');

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init(userSchema, { tableName: 'user', sequelize });
  }
  static associate(/* models */) {}
};

