let db = require('./db')
let express = require('express')
let router = express.Router()
let mysql = require('mysql')
let _sql = require('./sqlfun')

let connection = mysql.createConnection(db.mysql)

connection.connect()

let jsonWrite = (res, ret) => {
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

router.post('/login', (req, res) => {
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

module.exports = router
