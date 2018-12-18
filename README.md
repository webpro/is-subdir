# is-subdir

## Installation

```
npm install @webpro/is-subdir
```

## Usage

```javascript
const isSubDir = require('@webpro/is-subdir');
isSubDir(dir = '.', base = process.cwd()) => Boolean
```

## Examples

```javascript
isSubDir('..'); // false
isSubDir('.'); // false
isSubDir('foo'); // true
isSubDir('/foo/bar', '/foo'); // true
```

See the [tests](./test.js) for more examples.

## Alternatives

- [subdir](https://www.npmjs.com/package/subdir)
- [is-subdir](https://www.npmjs.com/package/is-subdir)
