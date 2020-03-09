module.exports = {
  // Swagger文档中api-docs文件路径，多个时使用
  // urls: [
  //   'https://petstore.swagger.io/v2/swagger.json'
  // ],
  // Swagger文档中api-docs文件路径，单个时使用
  url: 'https://petstore.swagger.io/v2/swagger.json',
  // 接口排除列表，跳过一些不需要同步的api
  blacklist: ['/api/user/login'],
  // mock服务输出目录
  outputPath: './src/mockRouter'
}