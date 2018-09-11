if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

if (process.env.NODE_ENV) {
  const dbConfig = require(`./../env/env.${process.env.NODE_ENV}`);
  Object.assign(process.env, {
    DB_USER: dbConfig.DB_USER,
    DB_PASS: dbConfig.DB_PASS,
    DB_NAME: dbConfig.DB_NAME,
    DB_HOST: dbConfig.DB_HOST,
    DB_DIALECT: dbConfig.DB_DIALECT,
  });
}

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: process.env.DB_LOGGING || false,
    pool: {
      max: process.env.DB_POOL_MAX || 5,
      min: process.env.DB_POOL_MIN || 0,
      acquire: process.env.DB_POOL_ACQUIRE || 30000,
      idle: process.env.DB_POOL_IDLE || 10000,
    },
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: process.env.DB_LOGGING || false,
    pool: {
      max: process.env.DB_POOL_MAX || 5,
      min: process.env.DB_POOL_MIN || 0,
      acquire: process.env.DB_POOL_ACQUIRE || 30000,
      idle: process.env.DB_POOL_IDLE || 10000,
    },
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: process.env.DB_LOGGING || false,
    pool: {
      max: process.env.DB_POOL_MAX || 5,
      min: process.env.DB_POOL_MIN || 0,
      cquire: process.env.DB_POOL_ACQUIRE || 30000,
      idle: process.env.DB_POOL_IDLE || 10000,
    },
  },
  staging: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: process.env.DB_LOGGING || false,
    pool: {
      max: process.env.DB_POOL_MAX || 5,
      min: process.env.DB_POOL_MIN || 0,
      acquire: process.env.DB_POOL_ACQUIRE || 30000,
      idle: process.env.DB_POOL_IDLE || 10000,
    },
  },
};
