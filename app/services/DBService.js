const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');

let connection = null;

const initModels = () => {
  const pathModels = `${__dirname}/../models`;

  fs.readdirSync(pathModels).filter(file => (file.indexOf('.') !== 0) && file !== 'index.js' && (file.slice(-3) === '.js')).forEach((file) => {
    const tempName = file.substring(0, file.length - 3);
    const model = require(path.join(pathModels, file));
    connection.models[tempName] = model.init(connection, Sequelize);
  });

  Object.values(connection.models)
    .filter(model => typeof model.associate === 'function')
    .forEach(model => model.associate(connection.models));
};


module.exports = {
  connect(config) {
    connection = new Sequelize(config.database, config.username, config.password, {
      host: config.host,
      dialect: config.dialect,
      operatorsAliases: false,

      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      // storage: 'path/to/database.sqlite'
    });

    initModels();
    return connection;
  },

  getConnection() {
    if (connection) {
      return connection;
    }
    return false;
  },
};

