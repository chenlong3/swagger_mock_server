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
    }
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