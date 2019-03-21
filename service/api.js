let db = require('./db')
let express = require('express')
let router = express.Router()
let mysql = require('mysql')
let _sql = require('./sqlfun')

let connection = mysql.createConnection(db.mysql)

connection.connect()

let jsonWrite = (res, ret) => { // 发送数据
  if (typeof ret === 'undefined') {
    res.send({
      code: 1,
      msg: '操作失败'
    })
  } else {
    console.log(ret)
    res.send(ret)
  }
}

router.post('/login', (req, res) => { // 登录接口
  let sql = _sql.user.login
  console.log(sql)
  let params = req.body
  console.log(params)
  console.log(params.name)
  connection.query(sql, [params.name], (err, data) => {
    if (err) {
      console.log(err)
    } else {
      jsonWrite(res, data)
      console.log('登录接口返回', data)
      res.end('登录接口')
    }
  })
})

router.post('/register', (req, res) => { // 注册接口
  let sql = _sql.user.register
  console.log(sql)
  console.log(req)
  let params = req.body
  console.log(params)
  connection.query(sql, [params.name, parmas.pwd, time], (err, data) => {
    if (err) {
      console.log(err)
    } else {
      jsonWrite(res, data)
      console.log('注册接口数据', data)
      res.end('注册接口')
    }
  })
})

module.exports = router
