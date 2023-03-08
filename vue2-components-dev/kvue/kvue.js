
function defineReactive(obj,key,val) {
    // 递归
    Observe(val)

    const dep = new Dep
    // 属性拦截
    Object.defineProperty(obj,key,{
        get(){
            // 依赖收集
            Dep.target && dep.addDep(Dep.target)
            return val
        },
        set(newVal){
            if(newVal!==val) {
                console.log('set', key)
                // 防止用户再次设置一个新的对象
                Observe(newVal)
                val = newVal

                // 通知更新
                // watchers.forEach(w=> w.update())
                dep.notify()
            }
        }
    })
}

//1. 获取数组原型
const arrayProto = Array.prototype
//2. 备份一份原型
const copyProto = Object.create(arrayProto)
//3. 方法重写
['push','pop','unshift','shift','slice','sort','reverse'].forEach(method => {
    copyProto[method] = function () {
        copyProto[method].call(this,arguments)
    }
})

// 遍历传入obj的所有属性 执行响应式处理
function Observe(obj) {
    // 首先判断obj 是对象
    if(typeof obj !== 'object' || obj === null) {
        return obj
    }
    if(Array.isArray(obj)) {
        
    }else {
        Object.keys(obj).forEach(key=> defineReactive(obj,key,obj[key]))
    }
    
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
        // console.log(this.$data)
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
        // 保存实例
        this.$vm = vm

        // 宿主元素
        let el = document.querySelector(dom)

        // 编译
        this.compile(el)
    }
    isElement(node) {
        return node.nodeType === 1
    }
    isInter(node) {
        return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
    }
    // 处理所有动态绑定 dir 就是指令名称
    update(node,exp,dir) {
        // 1. 初始化
        const fn = this[dir+ 'Updater']
        fn && fn.call(this, node, this.$vm[exp])
        // 2. 创建Watcher实例 负责后续更新
        new Watcher(this.$vm, exp, function(val) {
            fn && fn.call(this, node, val)
        })
    }
    textUpdater(node,val) {
        // 1. 获取表达式的值
        node.textContent = val
    }
    // 解析差值表达式
    compileText(node) {
        this.update(node, RegExp.$1, 'text')
    }
    isDir(attrName) {
        return attrName.startsWith('v-')
    }
    text(node,exp) {
        this.update(node,exp,'text')
    }
    html(node,exp) {
        this.update(node,exp,'html')
    }
    htmlUpdater(node,val) {
        node.innerHTML = val
    }
    compile(el) {
        // 遍历 获得子节点
        // childNodes 可以获取到 文本节点 和 标签节点
        const childNodes = el.childNodes

        // children 只能获取到标签节点
        const childNodes2 = el.children
        childNodes.forEach(node=> {
            if(this.isElement(node)) {
                // 元素 解析 指令 属性绑定 事件
                const attrs = node.attributes
                Array.from(attrs).forEach(attr=> {
                    // 判断是否是动态的属性
                    // 1. 指令 v-xxx
                    const attrName = attr.name // 属性的键
                    const exp = attr.value // 属性得值
                    if(this.isDir(attrName)) {
                        const dir = attrName.slice(2)
                        this[dir] && this[dir](node, exp)
                    }
                })
                console.log('node 标签节点', node.nodeName)

                if(node.childNodes.length> 0) {
                    // 递归判断是否有子节点
                    this.compile(node)
                }
            }else if(this.isInter(node)){
                // 差值绑定表达式
                console.log('node 文本节点', node.textContent)
                this.compileText(node)
            }
        })
    }
}

const watchers = []
// Watcher 负责具体节点的更新
// vue 1 的watcher 可以精准更新 不需要虚拟dom diff
// 随着项目复杂度的增加  watcher 可能会超出内存
// 所以vue 2 的watcher 是以组件为维度 数据更新 整个watcher 都会去更新  
// 所以vue2 引入了 虚拟dom diff算法 为了更加精准的更新
class Watcher {
    constructor(vm,key,updater) {
        this.vm = vm
        this.key = key
        this.updater = updater

        // 度当前值 触发依赖收集
        Dep.target = this
        this.vm[this.key]
        Dep.target = null
    }
    update() {
        const val = this.vm[this.key]
        console.log('watcher update',this,this.key,val)
        this.updater.call(this.vm,val)
    }
}

// dep 和 key 之间有一一对应的关系
class Dep {
    constructor () {
        this.deps = []
    }
    addDep(dep) {
        this.deps.push(dep)
    }
    notify() {
        this.deps.forEach(dep=> dep.update())
    }
}