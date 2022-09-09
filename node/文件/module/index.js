// require 返回的是module.exports 的内容而不是 exports
const a = require('./A/a')
const b = require('./B/b')


console.log(a)
console.log(b)
console.log(a === b)