// 追加文件
const fs = require('fs')
// 首先需要先读取一下文件
fs.readFile('./static/readMe.txt', 'utf8', (err, data) => {
    // 如果没有出错 继续后续的操作
    if (!err) {
        // 拼接自己想要的内容
        const res = data + '我是追加的内容'
        // 打印测试一下
        console.log('res',res)
        // 进行文件的写入操作
        fs.writeFile('./static/readMe.txt', res, (err) => {
            if(!err){
                // 写入成功的回调函数
                console.log('追加成功')
            }
        })
    }
})