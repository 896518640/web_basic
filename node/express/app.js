const express = require('express')
const path = require('path')
const app = express()
const router = require('./router/index.js')
// console.log(router)
// 引入路由
app.use('/' , require('./router'))

// 处理数据
app.use(express.static(path.join(__dirname,'./public')))
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

// 监听3000 端口
app.listen(3000,() => {
     console.log('3000 - run')
})

