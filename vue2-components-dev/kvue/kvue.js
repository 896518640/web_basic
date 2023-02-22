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
                // 防止用户再次设置一个新的对象
                Observe(newVal)
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

// 将data中的响应式数据 直接挂载到 vue 实例上
function proxy(vm) {
    Object.keys(vm.$data).forEach(key=> {
        Object.defineProperty(vm,key,{
            get() {
                return vm.$data[key]
            },
            set(v) {
                vm.$data[key] = v
            }
        })
    })
}
class Vue {
    constructor(options) {
        // 0. 保存选项
        this.$options = options
        this.$data = options.data
        console.log(this.$data)
        // 1. 响应式  递归遍历data中的对象 做响应式处理3 
        Observe(this.$data)

        // 1.5 proxy
        proxy(this)

        // 2. 编译模板
        // 需要处理 文本节点判断是否有{{}}   标签节点 v-on v-model @ : 这些属性
        new Compile(options.el,this)
    }
}
// 遍历模板树 解析动态的部分  并且初始化更新函数
class Compile{
    constructor(dom,vm){
        // 宿主元素
        let el = document.querySelector(dom)

        // 编译
        this.compile(el)
    }
    isElement(node) {
        return node.nodeType===1
    }
    compile(el) {
        // 遍历 获得子节点
        // childNodes 可以获取到 文本节点 和 标签节点
        const childNodes = el.childNodes

        // children 只能获取到标签节点
        const childNodes2 = el.children
        console.log(childNodes,childNodes2)
        childNodes2.forEach(node=> {
            if(this.isElement(node)) {
                // 元素
            }else if(this.isInter(node)){
                // 差值绑定表达式
            }
        })
    }
}