// 导入 fs 模块
const fs = require('fs')

// 导入url模块
const url = require('url')

// 导入controller
const controller = require('./controller')

// 引入qs
const qs = require('querystring')

module.exports = (req, res) => {
    if (req.method === 'GET') {
        const path = url.parse(req.url)
        if (path.pathname === '/index') {
            controller.index(res)
        }
        // 监听URL 为 book
        else if (path.pathname == '/book') {
            controller.book(res,path)
        } else {
            controller.img(res)
        }
    } else if (req.method === 'POST') {
        // post请求参数一般存放于请求体中
        console.log(req.method)
        // 定义了一个post变量 用于暂存请求体的信息
        let data = ''
        // 通过req data事件监听函数 每当接收到请求体的数据 就累加到 data 变量中去
        req.on('data', function (d) {
            console.log(d) // 返回的数据类型是buffer
            data += d
        })
        // 在end事件触发后 通过qs  parse 方法 将post 解析为真正的post请求的格式 然后向客户端返回
        req.on('end', function () {
            // console.log(qs.parse(data))
            controller.user(qs.parse(data),res)
        })
        res.end()
    }
}