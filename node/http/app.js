// 导入http模块
const http = require('http')

//  引入路由
const router = require('./router/index.js')

// 创建服务器
//获取到服务器的实例对象
const server = http.createServer()

// 监听8080 端口
server.listen(8080, function () {
    console.log('8080 run ~')
})

server.on('request', (req, res) => {
    router(req, res)
})


// server.on('request',(req,res)=>{
//     console.log('前端访问 request')
//     // res.setHeader('Content-type','text/plain;charset=utf-8')
//     res.setHeader('Content-type','text/html;charset=utf-8')
//     res.write('<h2>你好<h2/>')
//     res.end('8888')
// })