// 导入http模块
const http = require('http');

// 创建web服务器
const server = http.createServer();

// 为服务器绑定request时间，监听客户端端口
server.on('request', (request, response) => {
    console.log('Hello World!');
})

// 启动服务器
server.listen(80, function () {
    console.log('server running at http://127.0.0.1');
})