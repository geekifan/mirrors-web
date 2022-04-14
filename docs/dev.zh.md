# 开发文档

## 设计原则

本项目的设计原则有一下几点：

- 为了支持项目的可维护性、可读性、可复用性以及前端交互逻辑的现代化，考虑到相关技术文档的丰富性，本项目采用了 Vue-CLI 解决方案作为本项目的前端技术栈。
- 本项目采用前后端分离的架构，后端只需要返回相关json即可完成前端界面的数据渲染，能够对新闻、镜像列表等经常变动的数据进行热更新，而无需再次编译生产代码，减小维护人员负担。
- 尽可能对各个不同的前端模块解耦合以提高模块的复用性。代码模块化能够大大提高代码的可读性，帮助新入手的人员快速熟悉代码结构。
- 尽可能将 css 样式与 vue 文件分离，并指定为 scoped 来设定样式的范围。这样能够减小开发人员的失误导致的全局 css 样式破坏。
- 将重要变量单独抽离，对依赖第三方库的重要代码进行封装，提高前端可配置性和可移植性。
- 对于新闻和文档，可以直接渲染后端返回的md，基于marked库。

## 源代码目录结构

```
src/
    api/api.js        封装了前端的所有API请求
    assets/           开发时所使用的静态资源
    components/       前端组件
    global/global.js  全局变量文件，存放前端重要配置变量
    locales/
        en.json       i18n 英文
        zh.json       i18n 中文
    plugins/          Vue 插件目录
    router/
        index.js      前端路由配置
    styles/           样式文件目录
    utils/
        request.js    第三方请求库封装
    views/            前端路由视图容器
    App.vue           前端代码总入口
    i18n.js           i18n 配置
    main.js           前端 javascript 总入口

```

## 重要文件说明及编写规范

### global/global.js

该文件存放了前端全局可用的配置变量，目前一共有以下几个变量：

```
helpRootPath 帮助文档的路由地址，默认为 /help
newsRootPath 新闻页面的路由地址，默认为 /news
mirrorRootPath 镜像站首页的路由地址，默认为 /
helpMarkDownRootPath 请求帮助MarkDown的后端地址，默认为 /help/_docs
newsMarkDownRootPath 请求新闻MarkDown的后端地址，默认为 /news/_post
distrosRequestPath 请求镜像下载链接的后端地址，默认为 /distros.json
newsListRequestPath 请求新闻列表的后端地址，默认为 /news-list.json
infoRequestPath 请求镜像信息的后端地址（包括helps和officials，用于标明官方镜像和是否存在帮助文档），默认为 /info.json
homeTitle 主页的title
helpTitle 帮助页面的title
newsTitle 新闻页面的title
```
