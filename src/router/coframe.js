var express = require('express');
var router = express.Router();
const mock = require("mockjs").mock

router.get('/user-accounts/:id/granted-menus', function(req, res) {
  const menus = [
    {
      children: [],
      menuId: 'todo',
      menuName: '我的待办',
      openMode: 'in_self',
      menuPath: '/myWorkbench/todo-task'
    },
    {
      children: [],
      menuId: 'freedomProcessPage',
      menuName: '自由任务申请单查询',
      openMode: 'in_self',
      menuPath: '/dailyWork/freedomProcess' 
    },
    {
      children: [],
      menuId: 'freedomProcessApply',
      menuName: '自由任务申请',
      openMode: 'in_self',
      menuPath: '/dailyWork/freedomProcess/addPage' 
    }
    /** 
     * 在这增加菜单
     * 格式如下
     * {
      children: [],
      menuId: 'done',
      menuName: '我的已办',
      openMode: 'in_self',
      menuPath: '/myWorkbench/done-task'
    }
    */
  ]
  res.json(mock(menus));
});

router.get('/user/me', function(req, res) {
  const user = {
    id: 99,
    username: '@string',
    roleCodes: '@string',
    name: '@string'
  }
  res.json(mock(user))
})

module.exports = router;