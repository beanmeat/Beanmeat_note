// 向module.exports对象上挂在username和sayHello方法
module.exports.username = 'beanmeat';
module.exports.sayHello = function hello() {
    console.log('hello world')
}

module.exports = {
    nickname: 'beanmeat',
    hello() {
        console.log('hello world')
    }
}