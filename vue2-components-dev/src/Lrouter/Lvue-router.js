let Vue;

// vue 插件编写
// 实现一个install方法
class VueRouter {
    constructor() {
        console.log('Vue', Vue);
    }
}

// 形参1 是Vue构造函数： 目的是便于扩展
VueRouter.install = function (_Vue) {
    Vue = _Vue;
    Vue.component('router-view',{
        render(h) {
            // h 就是createElement()
            // 作用 返回一个虚拟DOM
            return h('div','router-view')
        }
    })
    Vue.component('router-link',{
        props: {
            to: {
                type:String,
                required:true,
                default:()=> ''
            }
        },
        render(h) {
            // <router-link>abc</router-link>
            return h('a',{
                attrs: {
                    href:'#' + this.to
                }
            },this.$slots.default)
        }
    })
};

export default VueRouter;
