const path = require('path');

module.exports = (dir = '.', base = process.cwd()) => path.relative(dir, base).startsWith('..');
