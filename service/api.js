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

