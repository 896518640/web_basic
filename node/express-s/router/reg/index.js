const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
router.get('/', async (req, res) => {
    // fs.readFile(path.join(__dirname, '../../db/user.json'),'utf8',function(err,data){
    //     if(!err){
    //         res.send({
    //             code: 0,
    //             msg: "reg 接口请求",
    //             data: JSON.parse(data)
    //         })
    //     }else{
    //         res.status(500).json(err)
    //     }
    // })
    let data
    try {
        data = fs.readFileSync(path.join(__dirname, '../../db/user.json'), 'utf-8')
        if (data) {
            res.send({
                code: 0,
                msg: 'reg 接口',
                data: JSON.parse(data)
            })
        }
    } catch (error) {
        res.status(500).json(err)
    }
})
router.post('/', async (req, res) => {
    let body = req.body
    console.log(body)
    if (!body) {
        return res.status(403).json({
            error: '缺少用户信息'
        })
    }
    try {
        res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
        // let data = fs.readFileSync(path.join(__dirname, '../../db/user.json'), 'utf8')
        console.log(JSON.stringify(body))
        console.log(path.join(__dirname,'../../db/user.json'))
        const a = fs.writeFileSync(path.join(__dirname, '../../db/user.json', JSON.stringify(body)),{})
        // console.log('data', data)
        console.log('a', a)
        res.send()
        // if (!w) {
        //     return res.status(200).send({
        //         code: 0,
        //         msg: "/reg post 添加成功",
        //         data: JSON.parse(data)
        //     })
        // }
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
})
module.exports = router