# [Nodejs](https://nodejs.org/en)

相关网址：

https://nodejs.cn/

https://nodejs.org/zh-cn

## [fs文件系统](https://nodejs.cn/api/v20/fs.html)

fs模块是官方提供的、用来操作文件的模块，提供了一系列的方法和属性。

![image-20250914115022978](images\Node.js.assets\image-20250914115022978.png)

### [fs.readFile(path[, options], callback)](https://nodejs.org/docs/latest-v23.x/api/fs.html#fspromisesreadfilepath-options)

- `path`:  filename or `FileHandle`
- `options`:  Object | string
  - `encoding`
  - `flag`
  - `signal`
- `callback`: Function
  - `err`
  - `data`

```js
// 导入fs模块中的readFile
const { readFile } = require('fs')

readFile('./temp.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
})
```

回调传入了两个参数 `(err, data)`，其中 `data` 是文件的内容。如果未指定编码，则返回原始缓冲区。如果 `options` 是字符串，则它指定编码：

```js
import { readFile } from 'node:fs';

readFile('/etc/passwd', 'utf8', callback); 
```

### fs.writeFile(file, data[, options], callback)

- `file`: 文件名或文件描述符
- `data`
- `option`: Object | string
  - `encoding`
  - `mode`
  - `flag`
  - `flush`: 如果所有数据都成功写入文件，并且 `flush` 是 `true`，则使用 `fs.fsync()` 来刷新数据。默认值：`false`。
  - `signal`
- `callback`
  - `err`

当 `file` 是文件名时，将数据异步地写入文件，如果文件已存在则替换该文件。`data` 可以是字符串或缓冲区。

```js
import { writeFile } from 'fs';
import { Buffer } from 'buffer';

const data = new Uint8Array(Buffer.from('Hello Node.js'));
writeFile('message.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
```

如果 `options` 是字符串，则它指定编码：

```js
import { writeFile } from 'node:fs';

writeFile('message.txt', 'Hello Node.js', 'utf8', callback); 
```

在同一个文件上多次使用 `fs.writeFile()` 而不等待回调是不安全的。对于这种情况，建议使用 [`fs.createWriteStream()`](https://nodejs.cn/api/fs.html#fscreatewritestreampath-options)。

与 `fs.readFile` 类似 - `fs.writeFile` 是一种便捷方法，它在内部执行多个 `write` 调用以写入传递给它的缓冲区。对于性能敏感的代码，则考虑使用 [`fs.createWriteStream()`](https://nodejs.cn/api/fs.html#fscreatewritestreampath-options)。

在同一个文件上多次使用 `fs.writeFile()` 而不等待回调是不安全的。对于这种情况，建议使用 [`fs.createWriteStream()`](https://nodejs.cn/api/fs.html#fscreatewritestreampath-options)。

与 `fs.readFile` 类似 - `fs.writeFile` 是一种便捷方法，它在内部执行多个 `write` 调用以写入传递给它的缓冲区。对于性能敏感的代码，则考虑使用 [`fs.createWriteStream()`](https://nodejs.cn/api/fs.html#fscreatewritestreampath-options)。



## [Path](https://nodejs.cn/api/path.html)

在使用`fs`模块操作文件的时候，如果提供的操作路径是以 ./ 或者 ../ 开头的相对路径时，很容易出现路径动态拼接错误的问题，代码在运行的时候，**会执行node命令时所处的目录**，动态拼接出被操作文件的完整路径。

解决方案：

- 使用绝对路径（移植性非常差，不利于维护）
- 使用 `__dirname`，表示当前文件所处的目录

```js
// 导入fs模块中的readFile
const { readFile } = require('fs')

readFile(__dirname + '/../temp.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
})
```

![image-20250914124612840](images\Node.js.assets\image-20250914124612840.png)

`node:path` 模块提供了用于处理文件和目录的路径的实用工具。可以使用以下方式访问它：

```js
const path = require('node:path');
```

### [path.join([...paths])](https://nodejs.cn/api/path.html#pathjoinpaths)

用来将多个路径片段拼接成一个完整的字符串

- `...paths`: 路径片段的序列
- 返回：String

`path.join()` 方法使用特定于平台的分隔符作为定界符将所有给定的 `path` 片段连接在一起，然后规范化生成的路径。零长度的 `path` 片段被忽略。如果连接的路径字符串是零长度字符串，则将返回 `'.'`，表示当前工作目录。

```js
const path = require('node:path');

path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// Returns: '/foo/bar/baz/asdf'

path.join('foo', {}, 'bar');
// Throws 'TypeError: Path must be a string. Received {}'
```



>凡是涉及到路径拼接的操作，都要使用path.join()方法进行处理。不要直接使用 + 进行字符串的拼接。

```js
const { readFile } = require('fs')
const path = require('node:path');

readFile(path.join(__dirname + '/../temp.txt'), (err, data) => {
    if (err) throw err;
    console.log(data);
})
```



### [path.basename(path[, suffix])](https://nodejs.cn/api/path.html#pathbasenamepath-suffix)

用来从路径字符串中，将文件名解析出来

- `path`
- `suffix`: 要删除的可选后缀

`path.basename()` 方法返回 `path` 的最后一部分，类似于 Unix `basename` 命令。

```js
const path = require('node:path');

path.basename('/foo/bar/baz/asdf/quux.html');
// Returns: 'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// Returns: 'quux' 
```



### [path.extname(path)](https://nodejs.cn/api/path.html#pathextnamepath)

`path.extname()` 方法返回 `path` 的扩展名，即 `path` 的最后一部分中从最后一次出现的 `.`（句点）字符到字符串的结尾。如果 `path` 的最后一部分中没有 `.`，或者除了 `path` 的基本名称（参见 `path.basename()`）的第一个字符之外没有 `.` 个字符，则返回空字符串。

```js
const path = require('node:path');

path.extname('index.html');
// Returns: '.html'

path.extname('index.coffee.md');
// Returns: '.md'

path.extname('index.');
// Returns: '.'

path.extname('index');
// Returns: ''

path.extname('.index');
// Returns: ''

path.extname('.index.md');
// Returns: '.md' 
```

## [http](https://nodejs.cn/api/http.html)

`http模块`是 Node.js 官方提供的，用来创建web服务器的模块。通过`http模块`提供的`http.createServer()`方法，就能方便的把一台不同的电脑，变成一台Web服务器，从而对外服务Web资源服务。

服务器和普通电脑的区别在于，服务器上安装了web服务器软件，例如：IIS、Apache等。通过安装这些服务器软件，就能把普通的电脑变成一台web服务器。在Nodejs中，我们不需要使用 IIS、Apache等这些第三方web服务器软件，使用Node.js提供的http模块来对外提供web服务。

### http.createServer()

```js
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
```

### request

```js
const http = require('http')

const server = http.createServer();

server.on('request', (request, response) => {
    const url = request.url;
    const method = request.method;
    const str = `Your request url is ${url}, and request method is ${method}`;
    console.log(str);
})

server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})
```

### response

```js
const http = require('http');

const server = http.createServer();

server.on('request', (request, response) => {
    const url = request.url;
    const method = request.method;
    const str = `Your request url is ${url}, and request method is ${method}`;
    console.log(str);

    // 调用response.end()方法，向客户端响应一些内容
    response.end(str)
})

server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})
```

### setHeader

```js
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
```

## module模块化

### 基本概念

遵守固定的规则，把一个大文件拆分成独立并相互依赖的多个小模块。

例如：

- 使用什么样的语法格式来**引用模块**
- 在模块中使用什么样的语法格式去**向外暴露成员**



1. 提高代码复用性
2. 提到代码可维护性
3. 可以实现按需加载