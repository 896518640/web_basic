let Vue
// 实现插件
// 1.声明一个Store类 维护响应式state 暴露 commit/dispatch
// 2. install 注册store
class Store {
    constructor(options) {
        // 1. 保存选项 
        this.$options = options
        
        this._mutations = options.mutations || {}
        this._actions = options.actions || {}
    
        this._vm = new Vue({
            data() {
              return {  
                $$state: options.state
              }
            }
        })

        // getters 原理·
        let getters = options.getters || {}
        this.getters = {}
        Object.keys(getters).forEach((getterName)=> {
            Object.defineProperty(this.getters, getterName,{
                // 拦截
                get: () => {
                    return getters[getterName](this.state)
                }
            })
        })

        // 修改this 指向
        this.commit = this.commit.bind(this)
        this.dispatch = this.dispatch.bind(this)
    }
    // 存取器
    get state() {
        return this._vm._data.$$state
    }
    set state(v) {
        console.log(`请使用replaceState去修改状态`)
    }
    commit(type,payload) {
        console.log('commit',this)
        if(!type)return
        const entry = this._mutations[type]
        if(!entry) {
            console.error('error')
            return 
        }
        entry(this.state, payload)
    }
    dispatch(type,payload) {
        console.log('dispatch',this)
        const entry = this._actions[type]
        if(!entry) {
            console.error('error')
            return 
        }
        // 此处上下文 { commit dispatch state }
        entry(this, payload)
    }
}
function install(_Vue) {
    Vue = _Vue
    Vue.mixin({
        beforeCreate(){
            // 只想在根实例实例化的时候执行一次 所以进行判断
            if(this.$options.store){
                Vue.prototype.$store = this.$options.store
            }else {
                // 非根组件指向其父组件的$store
                this.$store = this.$parent && this.$parent.$store
            }
        }
    })
    console.log('hhhh',this)
}

export default {
    Store,install
}