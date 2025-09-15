// 导入fs模块中的readFile
const { readFile } = require('fs')

readFile(__dirname + '/../temp.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
})

