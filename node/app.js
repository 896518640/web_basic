// 文件操作模块
const fs = require('fs')
// console.log(fs)
// 如何读取文件 异步读取
fs.readFile('./static/readMe.txt', 'utf8', function (err, data) {
    if (err) {
        console.log(err)
    }
    console.log(data)
})
// 如何写入文件 异步写入
fs.writeFile('./static/readMe.txt', '6666', function (err) {
    if(err){
        console.log(err)
    }
})