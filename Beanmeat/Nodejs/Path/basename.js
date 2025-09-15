const path = require('node:path');

const path1 = path.basename('/foo/bar/baz/asdf/quux.html');
console.log(path1);
// Returns: 'quux.html'

const path2 = path.basename('/foo/bar/baz/asdf/quux.html', '.html');
console.log(path2)
// Returns: 'quux'