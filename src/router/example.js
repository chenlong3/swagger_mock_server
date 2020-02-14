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

router.get('/common-utils/employees', function(req, res) { // 所有人员
  const data = new Array(500).fill().map((item, index) => ({
    displayName: index + '-' + Mock.mock('@string'),
    empCode: String(index)
  })) 
  res.json(Mock.mock(data))
})

router.get('/coframe/dict-types/:code/dicts', function(req, res) { // 所有人员
  const code = req.params.code
  const data = {
    content: new Array(8).fill().map((item, index) => ({
      dictCode: String(index),
      dictName: `${code} ${index}`
    }))
  }
  res.json(Mock.mock(data))
})

router.get('/system-management/todo-tasks', function(req, res) { // 待办
  const workItems = [
    {
      processDefName: 'com.example.asdasd',
      activityInstName: '发起申请',
      processChName: '自由任务申请流程',
      processInstName: '@string',
      currentState: '4',
      createTime: '@date(yyyy/MM/dd HH:mm:ss)',
      isTimeOut: 'Y',
      actionURL: '/stateMode/dailyWork/freedomProcess/proccessPage?state=apply'
    },
    {
      processDefName: 'com.example.asdasd',
      activityInstName: '信息反馈',
      processChName: '自由任务申请流程',
      processInstName: '@string',
      currentState: '4',
      createTime: '@date(yyyy/MM/dd HH:mm:ss)',
      isTimeOut: 'Y',
      actionURL: '/stateMode/dailyWork/freedomProcess/proccessPage?state=feedback'
    },
    {
      processDefName: 'com.example.asdasd',
      activityInstName: '结果汇总',
      processChName: '自由任务申请流程',
      processInstName: '@string',
      currentState: '4',
      createTime: '@date(yyyy/MM/dd HH:mm:ss)',
      isTimeOut: 'Y',
      actionURL: '/stateMode/dailyWork/freedomProcess/proccessPage?state=collect'
    }
  ]
  const count = workItems.length
  const data = {
    workItems,
    pageCond: {
      count
    }
  }
  res.json(Mock.mock(data))
})

router.get('/workflow-management/wfDevInfoFb/page', function(req, res) {
  const total = Mock.mock('@integer(0, 10)')
  const data = {
    total,
    records: new Array(total).fill().map(() => {
      return {
        guid: '@string(number, 18)',
        processNumber: '@integer(0, 99)',
        processinstId: '@integer(0, 99)',
        processStatus: '@string',
        applyFbInfoTitle: '@string',
        applyFbInfoContent: '@string',
        applicantId: '@integer(0, 99)',
        applicantName: '@string',
        applicantDeptName: '@string',
        applicantDate: '@date(yyyy/MM/dd)',
        applicantTime: '@date(yyyy/MM/dd HH:mm:ss)',
        finishedTime: '@date(yyyy/MM/dd HH:mm:ss)'
      }
    })
  }
  res.json(Mock.mock(data))
})

const processData = {
  activityDefName: '@string',
  info: {
    guid: '@string(number, 18)',
    processNumber: '@integer(0, 99)',
    applicantDate: '@date(yyyy/MM/dd)',
    applicantName: '@string',
    applicantDeptName: '@string'
  },
  data: {
    applyUpToDate: '@date(yyyy/MM/dd)',
    applyFbInfoTitle: '@string',
    applyFbInfoContent: '@string(300)',
    applyFbPeopleIds: '1,2,3,4',
    applyFbPeopleNames: '@string'
  },
  fbInfo: {
    fbInfoFinishDate: '@date(yyyy/MM/dd)',
    fbInfoContent: '@string',
    fbInfoComments: '@string'
  },
  list: new Array(10).fill().map(() => {
    return {
      fbInfoContent: '@string',
      fbInfoFinishDate: '@date(yyyy/MM/dd)',
      fbInfoPersonName: '@string'
    }
  })
}
router.get('/workflow-management/wfDevInfoFb/detail/workitemid', function(req, res) {
  res.json(Mock.mock(processData))
})

router.get('/workflow-management/wfDevInfoFb/detail/:processInstId', function(req, res) {
  res.json(Mock.mock(processData))
})

router.post('/workflow-management/wfDevInfoFb/save', function(req, res) {
  res.send(true)
})

router.post('/workflow-management/wfDevInfoFb/submit', function(req, res) {
  res.send(true)
})

router.post('/workflow-management/wfDevInfoFb/terminal/:guid', function(req, res) {
  res.send(true)
})

module.exports = router;