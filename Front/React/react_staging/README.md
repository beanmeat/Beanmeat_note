### 路由的基本使用

1. 明确好界面中的导航区、展示区；

2. 导航区的a标签改为Link标签；

   ```react
   <Link to="/xxxxx">Demo</Link>
   ```

3. 展示区写Route标签进行路径的匹配

   ```react
   <Route path='/xxxx' component={Demo}/>
   ```

4. `<App>` 的最外侧包裹了一个 `<BrowserRouter>` 或 `<HashRouter>`

### 路由组件与一般组件

1. 写法不同：

   一般组件：`<Demo/>`

   路由组件：`<Route path="/demo" component={Demo}/>`

2. 存放位置不同：

   一般组件：components

   路由组件：pages

3. 接收到到的props不同：

   一般组件：写组件标签时传递什么，就接收到什么；

   路由组件：接收到三个固定的属性；

   ```text
   history:
       go: ƒ go(n)
       goBack: ƒ goBack()
       goForward: ƒ goForward()
   	push: ƒ push(path, state)
   	replace: ƒ replace(path, state)
   location:
       pathname: "/about"
       search: ""
       state: undefined
   match:
       params: {}
       path: "/about"
       url: "/about"
   ```

### NavLink与封装NavLink

NavLink可以实现路由链接的高亮，通过activeClassName指定样式名；

```react
<NavLink activeClassName="beanmeat" className="list-group-item" to="/about">About</NavLink>
```

### Switch

```react
{/*通常情况下，path和component是一一对应的关系，Switch可以提高路由匹配效率（单一匹配）*/}
<Switch>
    <Route path="/about" component={About} />
    <Route path="/home" component={Home} />
    <Route path="/home" component={Test} />
</Switch>
```

如果不使用Switch，那么上述Home和Test组件都回展示出来，Switch会让path和component是一一对应的关系；

### 解决多级路径刷新页面样式丢失的问题

原因：如果脚手架请求了一个不存在的资源，就会将public下的index.html页面返回前端；CSS资源如果使用相对路径，多级路由情况下，会导致CSS请求路径错误，从而返回index.html页面；

解决方案：

1. public/index.html 中 引入样式时不写 ./ 写 / （常用）；
2. public/index.html 中 引入样式时不写 ./ 写 %PUBLIC_URL% （常用）；
3. 使用HashRouter；

### 路由的严格匹配与模糊匹配

1. 默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）；
2. 开启严格匹配：`<Route exact={true} path="/about" component={About}/>`
3. 严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由；

### Redirect

```react
<Switch>
    <Route exact={true} path='/about' component={About} />
    <Route exact={true} path='/home' component={Home} />
    {/*如果匹配不上,重定向*/}
    <Redirect to="/about"/>
</Switch>
```

### 嵌套路由

1. 注册子路由时要写上父路由的path值；
2. 路由的匹配是按照注册路由的顺序进行的；

### 向路由组件传递参数

1. params参数

   路由链接(携带参数)：`<Link to='/demo/test/tom/18'}>详情</Link>`

   注册路由(声明接收)：`<Route path="/demo/test/:name/:age" component={Test}/>`

   接收参数：`this.props.match.params`

2. search参数

   路由链接(携带参数)：`<Link to='/demo/test?name=tom&age=18'}>详情</Link>`

   注册路由(无需声明，正常注册即可)：`<Route path="/demo/test" component={Test}/>`

   接收参数：`this.props.location.search`

   备注：获取到的search是urlencoded编码字符串，需要借助querystring解析

3. state参数

   路由链接(携带参数)：`<Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}>详情</Link>`

   注册路由(无需声明，正常注册即可)：`<Route path="/demo/test" component={Test}/>`

   接收参数：`this.props.location.state`

   备注：刷新也可以保留住参数	

### 编程式路由导航

借助`this.prosp.history`对象上的API对操作路由跳转、前进、后退
```react
-this.prosp.history.push()
-this.prosp.history.replace()
-this.prosp.history.goBack()
-this.prosp.history.goForward()
-this.prosp.history.go()
```

### BrowserRouter与HashRouter的区别

1. 底层原理不一样：

   `BrowserRouter`使用的是H5的history API，不兼容IE9及以下版本。
   `HashRouter`使用的是URL的哈希值。

2. path表现形式不一样

   `BrowserRouter`的路径中没有#,例如：`localhost:3000/demo/test`
   `HashRouter`的路径包含#,例如：`localhost:3000/#/demo/test`

3. 刷新后对路由state参数的影响

   `BrowserRouter`没有任何影响，因为state保存在history对象中。

   `HashRouter`刷新后会导致路由state参数的丢失！！！

4. 备注：`HashRouter`可以用于解决一些路径错误相关的问题。
