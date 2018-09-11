const env = process.env.NODE_ENV;
const dbConfig = require('./boot.db')[env];

module.exports = {
  db: dbConfig,
  app: {
    port: process.env.APP_PORT || 80,
    baseUrl: process.env.BASE_URL || 'http://localhost',
    env: process.env.NODE_ENV || 'development',
    jwtKey: process.env.JWT_SECRET || '',
    countForks: process.env.APP_COUNT_FORKS || 1,
  },
  smtp: {
    default: {
      host: process.env.SMTP_HOST || 'localhost',
      port: process.env.SMTP_PORT || 25,
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || '',
      sequre: process.env.SMTP_SEQURE || true,
    },
  },
  security: {
    saltRounds: process.env.SECURITY_SOLDROUNDS || 10,
  },
  logger: {
    dailyRotate: {
      dirname: process.env.LOGGER_DAILY_DIRNAME || 'logs',
      filename: process.env.LOGGER_DAILY_FILENAME || 'application-%DATE%.log',
      datePattern: process.env.LOGGER_DAILY_DATEPATTERN || 'YYYY-MM-DD-HH',
      fileMaxSize: process.env.LOGGER_DAILY_FILE_MAXSIZE || '20m',
      fileMaxOld: process.env.LOGGER_DAILY_FILE_MAXOLD || '14d',
      fileZip: process.env.LOGGER_DAILY_FILE_ZIP || true,
    },
  },
};
