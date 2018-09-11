const userSchema = require('../../../app/models/schema/User');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('user', userSchema),

  down: queryInterface => queryInterface.dropTable('user'),
};
