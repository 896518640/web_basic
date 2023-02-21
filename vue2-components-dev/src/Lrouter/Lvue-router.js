let Vue;

// vue 插件编写
// 实现一个install方法
class VueRouter {
    constructor(options) {
        this.$options = options

        // 保存当前hash 到 cur
        // this.current = '/'

        // 要求传入的对象未响应式对象
        // Vue.set(this,'current','/')
        // 只起到拦截
        // Object.defineProperties()

        // vue 设置响应式数据接口
        Vue.util.defineReactive(this, 'current', window.location.hash.slice(1) || '/')
        // 监听hashchange
        window.addEventListener('hashchange', ()=> {
            this.current = location.hash.slice(1)
        })
    }
}

// 形参1 是Vue构造函数： 目的是便于扩展
VueRouter.install = function (_Vue) {
    Vue = _Vue;
    // 1. 将router注册一下
    // 此时并不能获取到vue实例 所以下面的代码将延迟到未来的某个时刻 根实例创建时
    Vue.mixin({
        beforeCreate() {
            // 只需要根实例
            if(this.$options.router) {
                Vue.prototype.$router = this.$options.router
            }
        }
    })
    
    // 2. 注册两个全局组件
    Vue.component('router-view',{
        // render 只会只执行一次 
        // 在初始化阶段，本质上发生在auto run函数中，然后通过render函数生成Virtual DOM，view根据Virtual DOM生成Actual DOM。因为render函数依赖于页面上所有的数据data，并且这些数据是响应式的，所有的数据作为组件render函数的依赖。一旦这些数据有所改变，那么render函数会被重新调用。
        // 在更新阶段，render函数会重新调用并且返回一个新的Virtual Dom，新旧Virtual DOM之间会进行比较，把diff之后的最小改动应用到Actual DOM中。
        render(h) {
            // h 就是createElement()
            // 作用 返回一个虚拟DOM
            console.log('render')
            // h 函数可以直接传入一个组件
            // 思路 可以根据url的hash部分动态的渲染组件
            let components = null
            const route = this.$router.$options.routes.find((route)=> route.path===this.$router.current)
            
            route && (components = route.component)
            return h(components)
        }
    })
    Vue.component('router-link', {
        props: {
            to: {
                type:String,
                required:true,
                default:()=> ''
            }
        },
        render(h) {
            // <router-link>abc</router-link>
            return h('a', {
                attrs: {
                    href:'#' + this.to
                }
            }, this.$slots.default)
        }
    })
};

export default VueRouter;
