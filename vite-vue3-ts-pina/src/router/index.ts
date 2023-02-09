import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        redirect: '/index',
        meta: {
            title: '首页',
        },
        children: [
            {
                path: '/index',
                name: 'Index',
                meta: {
                    title: '首页',
                },
                component: () => import('@/pages/index'),
            },
        ],
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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
