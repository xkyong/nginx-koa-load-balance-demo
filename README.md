# nginx-koa-load-balance-demo

这是一个使用nginx配合koa服务器测试负载均衡算法效果的仓库。

## proxy-server(nginx)

涉及的主要命令有：

```bash
# 启动 nginx 代理服务
$ nginx 

# 热重载服务
$ nginx -s reload

# 停止服务
nginx -s stop

# 帮助
nginx -h
```

关于负载均衡算法的相关配置，详见 `proxy-server/config/nginx.conf` 文件。



## cluster-server(koa)

进入 `cluster-server` 根目录，然后安装依赖：

```bash
$ pnpm i
```

并行启动所有koa服务：

```bash
$ pnpm run bootstrap
```

单个启动koa服务：

```bash
$ pnpm run server:8991
$ pnpm run server:8992
$ pnpm run server:8993
```



