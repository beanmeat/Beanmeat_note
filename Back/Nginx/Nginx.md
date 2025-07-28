# [Nginx](https://nginx.org/)

![image-20250728101120869](Nginx.assets/image-20250728101120869.png)

nginx ("*engine x*") is an HTTP web server, reverse proxy, content cache, load balancer, TCP/UDP proxy server, and mail proxy server. 

## [Installing&Uninstall nginx](https://nginx.org/en/docs/install.html)

### 源码编译

1. [进入官网查找需要下载版本的链接地址](https://nginx.org/en/download.html)，然后使用wget命令进行下载；

   ```shell
   wget http://nginx.org/download/nginx-1.16.1.tar.gz
   ```

2. 建议大家将下载的资源进行包管理；

   ```shell
   mkdir -p /beanmeat/nginx
   mv nginx-1.16.1.tar.gz /beanmeat/nginx
   ```

3. 解压缩；

   ```shell
   tar -xzf nginx-1.16.1.tar.gz
   ```

   执行`tar -zxvf nginx-1.16.1.tar.gz`对下载的资源进行解压缩，进入压缩后的目录，可以看到如下结构

   ![image-20250728125631366](Nginx.assets/image-20250728125631366.png)

   1. auto：存放的是编译相关的脚本；

   2. CHANGES：版本变更记录；

   3. CHANGES.ru：俄罗斯文的版本变更记录；

   4. conf：nginx默认的配置文件

   5. configure：nginx软件的自动脚本程序,是一个比较重要的文件，作用如下：

      检测环境及根据环境检测结果生成C代码；

      生成编译代码需要的Makefile文件；

   6. contrib：存放的是几个特殊的脚本文件，其中README中对脚本有着详细的说明；

   7. html：存放的是Nginx自带的两个html页面，访问Nginx的首页和错误页面；

   8. LICENSE：许可证的相关描述文件；

   9. man：nginx的man手册；

   10. README：Nginx的阅读指南；

   11. src：Nginx的源代码；

4. 进入资源文件中，找到configure；

   ```shello
   ./configure
   ```

   通过`./configure`来对编译参数进行设置，需要我们手动来指定一些参数；

   - --prefix=PATH：指向Nginx的安装目录，默认值为/usr/local/nginx   
   - --sbin-path=PATH：指向(执行)程序文件(nginx)的路径,默认值为${prefix}/sbin/nginx
   - --modules-path=PATH：指向Nginx动态模块安装目录，默认值为${prefix}/modules
   - --conf-path=PATH：指向配置文件(nginx.conf)的路径,默认值为${prefix}/conf/nginx.conf
   - --error-log-path=PATH ：指向错误日志文件的路径,默认值为${prefix}/logs/error.log
   - --http-log-path=PATH：指向访问日志文件的路径,默认值为${prefix}/logs/access.log
   - --pid-path=PATH：指向Nginx启动后进行ID的文件路径，默认值为${prefix}/logs/nginx.pid
   - --lock-path=PATH：指向Nginx锁文件的存放路径,默认值为${prefix}/logs/nginx.lock

   ```shell
   ./configure --prefix=/usr/local/nginx \
   --sbin-path=/usr/local/nginx/sbin/nginx \
   --modules-path=/usr/local/nginx/modules \
   --conf-path=/usr/local/nginx/conf/nginx.conf \
   --error-log-path=/usr/local/nginx/logs/error.log \
   --http-log-path=/usr/local/nginx/logs/access.log \
   --pid-path=/usr/local/nginx/logs/nginx.pid \
   --lock-path=/usr/local/nginx/logs/nginx.lock
   ```

5. 编译&安装

   ```shell
   make & make install
   ```

### [yum安装](https://nginx.org/en/linux_packages.html#RHEL)

1. 安装必备组件

   ```shell
   sudo yum install yum-utils
   ```

2. 要设置yum存储库，请创建名为/etc/yum.repos.d/nginx.repo的文件，其中包含以下内容：

   ```shell
   [nginx-stable]
   name=nginx stable repo
   baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
   gpgcheck=1
   enabled=1
   gpgkey=https://nginx.org/keys/nginx_signing.key
   module_hotfixes=true
   
   [nginx-mainline]
   name=nginx mainline repo
   baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
   gpgcheck=1
   enabled=0
   gpgkey=https://nginx.org/keys/nginx_signing.key
   module_hotfixes=true
   ```

3. 查看是否安装成功；

   ```shell
   yum list | grep nginx
   ```

4. 使用yum进行安装；

   ```shell
   yun install -y nginx
   ```

5. 查看nginx的安装位置

   ```shell
   whereis nginx
   ```

### Uninstall nginx

1. 将nginx的进程关闭

   ```shell
   ./nginx -s stop
   ```

2. 将安装的nginx进行删除

   ```shell
   rm -rf /usr/local/nginx
   ```

3. 将安装包之前编译的环境清除掉

   ```shell
   make clean
   ```


## Nginx配置

### Nginx目录结构

> yum install -y tree	方便查看linux系统上的目录结构；

![image-20250728163500555](Nginx.assets/image-20250728163500555.png)

1. conf：nginx所有配置文件目录；
   - CGI(Common Gateway Interface)通用网关【接口】，主要解决的问题是从客户端发送一个请求和数据，服务端获取到请求和数据后可以调用调用CGI【程序】处理及相应结果给客户端的一种标准规范；
   - `fastcgi.conf`：fastcgi相关配置文件；
   - `fastcgi.conf.default`：fastcgi.conf的备份文件；
   - `fastcgi_params`：fastcgi的参数文件；
   - `fastcgi_params.default`：fastcgi的参数备份文件；
   - `scgi_params`：scgi的参数文件；
   - `scgi_params.default`：scgi的参数备份文件；
   - `uwsgi_params`：uwsgi的参数文件；
   - `uwsgi_params.default`：uwsgi的参数备份文件；
   - **`mime.types`：记录的是HTTP协议中的Content-Type的值和文件后缀名的对应关系；**
   - **`mime.types.default`：mime.types的备份文件；**
   - **`nginx.conf`：这个是Nginx的核心配置文件；**
   - **`nginx.conf.default`：nginx.conf的备份文件；**
   - `koi-utf、koi-win、win-utf`这三个文件都是与编码转换映射相关的配置文件，用来将一种编码转换成另一种编码；
2. **html：存放nginx自带的两个静态的html页面；**
   - **50x.html：访问失败后的失败页面；**
   - **index.html：成功访问的默认首页；**
3. **logs：记录入门的文件，当nginx服务器启动后，这里面会有 access.log，error.log ，nginx.pid三个文件出现；**
4. **sbin：是存放执行程序文件nginx；**
   - **nginx：用来控制Nginx的启动和停止等相关的命令；**

### Nginx核心配置文件

Nginx的核心配置文件默认是放在`/usr/local/nginx/conf/nginx.conf`