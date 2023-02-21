function defineReactive(obj,key,val) {
    // 递归
    Observe(val)

    // 属性拦截
    Object.defineProperty(obj,key,{
        get(){
            console.log('get',key)
            return val
        },
        set(newVal){
            if(newVal!==val) {
                console.log('set', key)
                val = newVal
            }
        }
    })
}
// 遍历传入obj的所有属性 执行响应式处理
function Observe(obj) {
    // 首先判断obj 是对象
    if(typeof obj !== 'object' || obj === null) {
        return obj
    }
    Object.keys(obj).forEach(key=> defineReactive(obj,key,obj[key]))
}

// 动态新增一个属性
function set(obj,key,val) {
    defineReactive(obj,key,val)
}
const obj = {
    foo:'foo',
    bar: 'bar',
    baz: {
        a: 1
    }
}


Observe(obj)
// 1. 用户不能手动定义响应式对象
// console.log(obj.foo)
// obj.foo = 'da'
// obj.bar = 'asd'
// obj.baz
// obj.baz.a
// obj.dom = 'dong'
// obj.dom 
set(obj,'dom','dong')
obj.dom

// 2. 数组 支持不了
// 解决方案 需拦截数组的7个变更方法 覆盖他们 让他们做数组操作的同事进行变更通知
let arr = [1,2,3]
Observe(arr)
arr[0] = 2
