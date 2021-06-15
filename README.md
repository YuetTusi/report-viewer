## 取证报告查看

拉下源把后进入项目所在目录，执行`yarn install`安装。

之后运行`yarn run build`，无误后使用`yarn run start`运行。

测试数据请使用取证程序生成的报告数据，拷贝到public目录即可。


生产打包使用`yarn run build:prod`，执行成功后在项目的dist目录生成`report.min.js`文件，发布时将文件拷到目录的`tools\CreateReport\report`下即可。


Yarn命令：

| 命令                | 说明     |
| ------------------- | -------- |
| yarn run build      | 编译     |
| yarn run build:prod | 生产打包 |
| yarn run start      | 运行     |