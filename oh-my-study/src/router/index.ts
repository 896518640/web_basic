import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
        },
        component: () => import('@/pages/index'),
    },
    {
        path: '/index',
        name: 'Index',
        meta: {
            title: '首页',
        },
        component: () => import('@/pages/index'),
    },
    {
        path: '/vueUse',
        name: 'VueUse',
        meta: {
            title: 'vueUse',
        },
        component: () => import('@/pages/vueUse'),
    },
    {
        path: '/watch',
        name: 'watch',
        meta: {
            title: 'watch',
        },
        component: () => import('@/pages/watch'),
    },
    {
        path: '/ts',
        name: 'ts',
        meta: {
            title: 'ts',
        },
        component: () => import('@/pages/ts'),
    },
    {
        path: '/shake',
        name: '摇一摇',
        meta: {
            title: 'shake',
        },
        component: () => import('@/pages/shake/shakeDemo.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
console.log(routes);
export default router;
