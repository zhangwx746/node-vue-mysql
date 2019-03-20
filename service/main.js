// node服务器
let Api = require('./api')
let fs = require('fs')
let path = require('path')
let bodyParser = require('body-parser')
let express = require('express')
let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// 服务器开启后访问指定编译好的dist文件下的数据
app.use(express.static(path.resolve(__dirname, '../dist')))
app.get('*', (req, res) => {
  const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
  res.send(html)
})

app.use('/api', Api)
app.listen(8888)