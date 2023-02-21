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

class Vue {
    constructor(options) {
        // 0. 保存选项
        this.$options = options
        this.$data = options.data
        console.log(this.$data)
        // 1. 响应式  递归遍历data中的对象 做响应式处理3 
        Observe(this.$data)
        // 2. 编译模板
    }
}