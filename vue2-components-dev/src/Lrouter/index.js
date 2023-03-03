import VueRouter from './Lvue-router';
import Home from '../pages/home/index.vue';
import Vue from 'vue'
// use 方法将来会调用install方法
Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'Home',
        meta: {
            title: '首页',
        },
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            title: '前端导航',
        },
        component: () => import('../pages/about/index.vue'),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
