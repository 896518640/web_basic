import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
