// 导入http模块
const http = require('http')
// 导入 fs 模块
const fs = require('fs')
// 创建服务器
//获取到服务器的实例对象
const server = http.createServer()
server.listen(8080, function () {
    console.log('8080 run ~')
})

server.on('request', (req, res) => {
    // console.log(req.url)
    if (req.url === '/index') {
        console.log('访问首页')
        fs.readFile('./static/index.html', 'utf8', (err, data) => {
            console.log(data)
            res.write(data)
            res.end()
        })
    }
})


// server.on('request',(req,res)=>{
//     console.log('前端访问 request')
//     // res.setHeader('Content-type','text/plain;charset=utf-8')
//     res.setHeader('Content-type','text/html;charset=utf-8')
//     res.write('<h2>你好<h2/>')
//     res.end('8888')
// })