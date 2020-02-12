/** 
 * 示例
 * 
*/
const express = require('express');
const router = express.Router();
const Mock = require("mockjs");

router.get(
  /** 
    * 接口地址，服务启动后http://localhost:3000/example/test 查看返回数据
  */
 '/example/test', function(req, res) {
  // 接口返回的数据，具体格式参考https://github.com/nuysoft/Mock/wiki/Mock.Random
  const data = {
    id: 99,
    username: '@string',
    roleCodes: '@string',
    name: '@string'
  }
  res.json(Mock.mock(data))
})

module.exports = router;