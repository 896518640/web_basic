// 导入 fs 模块
const fs = require('fs')

module.exports = {
    index(res) {
        console.log('欢迎来到我的世界')
        // 阅读文件
        fs.readFile('./static/index.html', 'utf8', (err, data) => {
            // console.log(data)
            res.write(data)
            res.end()
        })
    },
    book(res,path) {
        let params
        if (path.query) {
            params = path.query.split('=')
        }
        // console.log('params', params)
        console.log('欢迎来到缅北～')
        res.writeHead(200, {
            "content-type": "text/html;charset=utf8"
        })
        res.write('book')
        res.end()
    },
    img(res){
        fs.readFile('./static/img/wallpaper.webp', function (err, data) {
            if (!err) {
                // console.log(data)
                res.end(data)
            }
        })
    },
    user(data,res){
        console.log(data)
        // res.end('0000000')
    }
}