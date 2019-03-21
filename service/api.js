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
      jsonWrite(res, {
        code: 0,
        message: '登录失败'
      })
    } else {
      data = JSON.parse(JSON.stringify(data))[0] || JSON.parse(JSON.stringify(data))
      console.log('登录接口返回', data)
      if (params.pwd === data.user_pwd) {
        jsonWrite(res, {
          code: 1,
          message: '登录成功'
        })
      } else {
        jsonWrite(res, {
          code: 0,
          message: '登录失败，用户名密码错误'
        })
      }
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
  let time = getNowFormatDate()
  connection.query(sql, [params.name, params.pwd, time], (err, data) => {
    if (err) {
      console.log(err)
      jsonWrite(res, {
        code: 0,
        message: '注册失败'
      })
    } else {
      jsonWrite(res, {
        code: 1,
        message: '注册成功'
      })
      console.log('注册接口数据', data)
      res.end('注册接口')
    }
  })
})

function getNowFormatDate () {
  let d = new Date()
  let year = d.getFullYear()
  let month = d.getMonth() + 1
  let day = d.getDate()
  let hours = d.getHours()
  let minute = d.getMinutes()
  let second = d.getSeconds()

  if (month < 10 && month >= 1) {
    month = `0${month}`
  }
  if (day < 10 && day >= 1) {
    day = `0${day}`
  }

  return `${year}-${month}-${day} ${hours}:${minute}:${second}`
}

module.exports = router
