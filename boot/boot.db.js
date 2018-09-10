if (process.env.NODE_ENV) {
  Object.assign(process.env, require(`./../env/env.${process.env.NODE_ENV}`));
}

module.exports = {
  development: {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    name: process.env.DB_NAME,
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
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    name: process.env.DB_NAME,
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
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    name: process.env.DB_NAME,
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
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    name: process.env.DB_NAME,
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
