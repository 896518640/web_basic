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
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
console.log(routes);
export default router;
