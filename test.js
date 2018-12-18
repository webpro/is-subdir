const assert = require('assert');
const isSubDir = require('./index');

// From cwd
assert.equal(isSubDir(), false);
assert.equal(isSubDir(''), false);
assert.equal(isSubDir('.'), false);
assert.equal(isSubDir('..'), false);
assert.equal(isSubDir('foo'), true);
assert.equal(isSubDir('foo/bar'), true);
assert.equal(isSubDir('index.js'), true);

// With base dir
assert.equal(isSubDir('foo', '.'), true);
assert.equal(isSubDir('foo/bar', 'foo'), true);
assert.equal(isSubDir('..', '/'), true);
assert.equal(isSubDir('', '.'), false);
assert.equal(isSubDir('..', '..'), false);
assert.equal(isSubDir('..', 'foo'), false);

// __dirname
assert.equal(isSubDir('foo', __dirname), true);
assert.equal(isSubDir('.', __dirname), false);

// Absolute dir
assert.equal(isSubDir('/Users', '/'), true);
assert.equal(isSubDir('/', '/'), false);
assert.equal(isSubDir('C:\\Users', 'C:\\'), true);
assert.equal(isSubDir('c:\\Program Files', 'C:\\'), true);

console.log('✔ Tests passed.');
