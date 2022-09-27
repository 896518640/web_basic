const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')

// 处理数据 需要在路由之前 否则路由获取不到请求体
app.use(express.static(path.join(__dirname,'./public')))
app.use(express.urlencoded({extended:true}))
app.use(express.static("./public"))

// 监听3000 端口
app.listen(3000,() => {
     console.log('3000 - run')
})

// 引入路由
app.use('/' , require('./router'))
