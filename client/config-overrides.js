const path = require('path');

module.exports = function override(config) {
  // Modify the output path
  config.output.path = path.join(__dirname, '../build');

  return config;
};
