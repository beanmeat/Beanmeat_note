// 导入 uniq 包
const uniq = require('uniq');

let arr = [1,2,2,2,3,4,5];

const result = uniq(arr);

console.log(result); // [ 1, 2, 3, 4, 5 ]