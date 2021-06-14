/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    config.node = { fs: 'empty' };
    config.plugins = config.plugins || [];

    config.plugins = [...config.plugins];

    return config;
  },
  env: {
    DOMAIN_URL: process.env.DOMAIN_URL,
    API_URL: process.env_API_URL,
  },
};
