const userSchema = require('../schema/User');

module.exports = {
  up: queryInterface => queryInterface.createTable('user', userSchema),

  down: queryInterface => queryInterface.dropTable('user'),
};
