import defaultConfig from './default';

/* eslint-disable import/no-mutable-exports */
let config = {};
switch (process.env.NODE_ENV || 'development' || 'dev') {
  default:
    config = Object.assign({}, defaultConfig, defaultConfig);
    break;
}

export default config;
