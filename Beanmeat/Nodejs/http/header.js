const http = require('http')

const server = http.createServer();

server.on('request', (request, response) => {
    const str = `请求的URL地址是 ${request.url}，请求的类型是 ${request.url}`;
    // 为了防止中文显示乱码问题，需要设置响应头 Content-Type 的值是 text/html; charset=utf-8
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.end(str);
})

server.listen(80,() => {
    console.log('server running at http://127.0.0.1');
})