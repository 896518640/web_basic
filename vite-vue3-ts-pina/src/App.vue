<template>
    <a-layout style="min-height: 100vh">
        <a-layout-sider v-model:collapsed="collapsed" collapsible>
            <div class="logo">春花秋月</div>
            <a-menu
                v-model:selectedKeys="selectedKeys"
                theme="dark"
                mode="inline"
            >
                <a-menu-item key="/index">
                    <pie-chart-outlined />
                    <span>首页</span>
                </a-menu-item>
                <a-menu-item key="/vueUse">
                    <desktop-outlined />
                    <span>vueUse</span>
                </a-menu-item>
                <a-sub-menu key="sub2">
                    <template #title>
                        <span>
                            <team-outlined />
                            <span>Team</span>
                        </span>
                    </template>
                    <a-menu-item key="6">Team 1</a-menu-item>
                    <a-menu-item key="8">Team 2</a-menu-item>
                </a-sub-menu>
                <a-menu-item key="watch">
                    <file-outlined />
                    <span>watch</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0" />
            <a-layout-content style="margin: 0 16px">
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item>User</a-breadcrumb-item>
                    <a-breadcrumb-item>Bill</a-breadcrumb-item>
                </a-breadcrumb>
                <div
                    :style="{
                        padding: '24px',
                        background: '#fff',
                        minHeight: '360px',
                    }"
                >
                    <RouterView />
                </div>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script lang="ts">
import {
    PieChartOutlined,
    DesktopOutlined,
    TeamOutlined,
    FileOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
    components: {
        PieChartOutlined,
        DesktopOutlined,
        TeamOutlined,
        FileOutlined,
    },
    setup() {
        const selectedKeys = ref<string[]>(['/index']);
        const router = useRouter();
        console.log(router, 'router');
        watch(selectedKeys, () => {
            console.log('change', selectedKeys.value);
            const keys = selectedKeys.value[0];
            // debugger;
            router.push({
                path: keys,
            });
        });
        return {
            selectedKeys,
        };
    },
    data() {
        return {
            collapsed: ref<boolean>(false),
        };
    },
});
</script>
<style>
.logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
    color: #fff;
    font-size: 20px;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.site-layout .site-layout-background {
    background: #fff;
}
.site-layout .site-layout-background {
    background: #141414;
}
</style>
