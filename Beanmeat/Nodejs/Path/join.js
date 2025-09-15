const { readFile } = require('fs')
const path = require('node:path');

readFile(path.join(__dirname + '/../temp.txt'), (err, data) => {
    if (err) throw err;
    console.log(data);
})