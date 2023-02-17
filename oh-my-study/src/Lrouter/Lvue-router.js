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
};

export default VueRouter;
