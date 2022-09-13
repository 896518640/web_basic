const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
router.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, '../../db/user.json'),'utf8',function(err,data){
        if(!err){
            res.send({
                code: 0,
                msg: "reg 接口请求",
                data: JSON.parse(data)
            })
        }else{
            res.status(500).json(err)
        }
    })
})

module.exports = router