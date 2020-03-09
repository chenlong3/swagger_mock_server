## 介绍

通过swagger文档生成前端mock服务

## 开始

#### 第一步

配置config.js,安装依赖
  
    npm i

#### 第二步

使用 npm 命令生成mock服务文件

    npm run build:mock

#### 第三步

使用 npm 命令启动mock服务

    npm start


## config说明

    {
      // Swagger文档中api-docs文件路径，多个时使用
      urls: [
        'https://petstore.swagger.io/v2/swagger.json'
      ],
      // Swagger文档中api-docs文件路径，单个时使用
      url: 'https://petstore.swagger.io/v2/swagger.json',
      // 接口排除列表，跳过一些不需要同步的api
      blacklist: [],
      // mock服务输出目录
      outputPath: './src/mockRouter'
    }

## 如何查找Swagger文档中api-docs文件路径

打开后端提供的Swagger文档地址的Network，发现有个api-docs文件。

![avatar](https://yqfile.alicdn.com/0460f4464be492c15debd7daec6f3f1aac2768cd.jpeg)

## License

[MIT License](./LICENSE).

