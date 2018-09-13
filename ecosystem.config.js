const fs = require('fs');

const APP_PATH_ENV = './env';
const APP_SCRIPT_PATH = './boot/boot.server.js';
const APP_NAME = 'bpolierplate-express';
const APP_WATCH = true;
const APP_NODE_ARGS = '';
const APP_MERGE_LOGS = true;
const APP_CWD = './';
const APP_ARGS = [];
const APP_IGNORE_WATCH = [
  'node_modules',
  'logs',
  '.git',
  '.idea',
  '.pm2',
  'temp',
];

const setUpEnvironment = (envName) => {
  if (fs.existsSync(`${APP_PATH_ENV}/env.${envName}.js`)) {
    const envVariables = require(`${APP_PATH_ENV}/env.${envName}.js`);
    return envVariables;
  }

  return {};
};

const envs = {
  env: setUpEnvironment('common'),
  env_development: setUpEnvironment('development'),
  env_staging: setUpEnvironment('staging'),
  env_production: setUpEnvironment('production'),
};

module.exports = {
  apps: [{
    name: APP_NAME,
    script: APP_SCRIPT_PATH,
    args: APP_ARGS,
    watch: APP_WATCH,
    ignore_watch: APP_IGNORE_WATCH,
    node_args: APP_NODE_ARGS,
    merge_logs: APP_MERGE_LOGS,
    cwd: APP_CWD,
    ...envs,
  }],
};
