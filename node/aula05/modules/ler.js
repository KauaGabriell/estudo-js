const fs = require('fs').promises;

module.exports = async (caminho) => {
  return await fs.readFile(caminho, 'utf8');
};
