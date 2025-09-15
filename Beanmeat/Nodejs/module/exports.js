// console.log(exports == module.exports)

exports.username = 'beanmeat';
module.exports = {
    gender: '男',
    age: '20',
}
console.log(module.exports) // { gender: '男', age: '20' }


// module.exports.username = 'beanmeat';
// exports = {
//     gender: '男',
//     age: 22
// }
//
// console.log(module.exports)

exports.username = 'beanmeat';
module.exports.gender = 'man';