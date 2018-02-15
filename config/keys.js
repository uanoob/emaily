// keys.js - figure out what set of credentials to return
const prod = require('./prod');
const dev = require('./dev');

if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  module.exports = prod;
} else {
  // we are in development - return the dev keys!!!
  module.exports = dev;
}
