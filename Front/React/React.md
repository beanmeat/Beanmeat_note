# React

官方文档：https://react.docschina.org/

![image-20250711155142531](React.assets/image-20250711155142531.png)

## react应用（基于react脚手架）

### react脚手架

1. xxx脚手架用来帮助开发快速创建一个基于xxx库的模板项目；
   1. 包含了所有需要的配置（语法检查，jsx编译，devServer...）；
   2. 下载好了所有相关的依赖；
   3. 可以直接运行一个简单效果；
2. react提供了一个用于基于react希昂木的脚手架库：create-react-app；
3. 项目的整体技术架构为：react + webpack + es6 + eslint；
4. 使用脚手架开发的项目的特点：模块化，组件化，工程化；



### 创建项目并启动

1. 全局安装：`npm i -g create-react-app`
1. 切换到想创项目的目录，使用命令：`create-react-app hello-react`
1. 进入项目文件夹：`cd hello-react`
1. 启动项目：`npm start`



### React脚手架项目结构

```java
	public ---- 静态资源文件夹
		favicon.icon ------ 网站页签图标
		index.html -------- 主页面
		logo192.png ------- logo图
		logo512.png ------- logo图
		manifest.json ----- 应用加壳的配置文件
		robots.txt -------- 爬虫协议文件
	src ---- 源码文件夹
		App.css -------- App组件的样式
		App.js --------- App组件
		App.test.js ---- 用于给App做测试
		index.css ------ 样式
		index.js ------- 入口文件
		logo.svg ------- logo图
		reportWebVitals.js
			--- 页面性能分析文件(需要web-vitals库的支持)
		setupTests.js
			---- 组件单元测试的文件(需要jest-dom库的支持)
```

## React ajax

axios

## pubSubJS

消息订阅预发布

## React路由

### react-router

1. react的一个插件库；
2. 专门实现一个SPA应用；
3. 基于React的项目都会用到此库；

### 路由组件和一般组件