const dotenv = require('dotenv').config();

const {
  NODE_ENV
} = process.env;

const config = {
  nodeEnv: NODE_ENV
};

module.exports = config;
