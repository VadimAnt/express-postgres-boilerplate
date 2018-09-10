module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('user', {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      default: Sequelize.fn('uuid_generate_v4'),
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      isEmail: true,
    },
    password: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [0, 50],
      },
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [0, 50],
      },
    },
    updatedAt: Sequelize.DATE,
    createdAt: Sequelize.DATE,
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('user'),
};
