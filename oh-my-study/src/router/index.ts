import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/pages/index/index.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'Home',
        meta: {
            title: '首页',
        },
        component: Home,
    },
    {
        path: '/navigation',
        name: 'Navigation',
        meta: {
            title: '前端导航',
        },
        component: () => import('@/pages/navigation/index.vue'),
    },
    {
        path: '/demo',
        name: 'Demo',
        meta: {
            title: '小案例',
        },
        redirect: '/demo/demo1/1',
        component: () => import('@/pages/demo/index.vue'),
        children: [
            {
                path: 'demo1/:id',
                component: () => import('@/pages/demo/demo1/index.vue'),
            },
            {
                path: 'demo2/:id',
                component: () => import('@/pages/demo/demo2/index.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
console.log(routes);
export default router;
