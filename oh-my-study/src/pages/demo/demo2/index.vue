<template>
    <div class="">
        <Component :is="curModule"></Component>
    </div>
</template>

<script lang="ts" setup>
import { watch, ref, onMounted } from 'vue';
import {
    useRoute,
    RouteLocationNormalizedLoaded,
    RouteRecordRaw,
} from 'vue-router';
const modules = import.meta.glob('./components/*.vue');
const route: RouteLocationNormalizedLoaded = useRoute();
const componentName: any = ref('');
const routes: RouteRecordRaw[] = [];
let curModule: any = ref('');

// 动态加载所有模块
function loadModule() {
    return new Promise(async (resolve, reject) => {
        try {
            for (const mod in modules) {
                let module: any = await modules[mod]();
                for (const key in module) {
                    routes.push({
                        path: '/' + key.toLowerCase(),
                        name: key.toLowerCase(),
                        component: module[key],
                    });
                }
            }
            resolve(routes);
        } catch (error) {
            reject(error);
        }
    });
}

// 查找模块
function findModule(path: any) {
    routes.forEach((item: any) => {
        if (item.component.__name.includes(path)) {
            curModule.value = item.component;
        }
    });
}

// 页面初始化 加载配置
onMounted(() => {
    componentName.value = route.params.id;
    loadModule().then(() => {
        findModule(componentName.value);
    });
});

// 监听路由
watch(
    () => route.params.id,
    (val: any) => {
        componentName.value = val;
        findModule(componentName.value);
    },
);
</script>

<style></style>
