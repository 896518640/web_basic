<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="layout-sidebar">
        <a-menu
            id="dddddd"
            v-model:openKeys="openKeys"
            v-model:selectedKeys="selectedKeys"
            style="width: 256px"
            mode="inline"
            theme="dark"
            @click="handleClick"
        >
            <a-sub-menu key="demo1" @title-click="titleClick">
                <template #icon>
                    <MailOutlined />
                </template>
                <template #title>1</template>
                <a-menu-item-group key="g1">
                    <template #icon>
                        <QqOutlined />
                    </template>
                    <template #title>1</template>
                    <a-menu-item key="1">web worker</a-menu-item>
                    <a-menu-item key="2">Option 2</a-menu-item>
                    <a-menu-item key="3">Option 2</a-menu-item>
                </a-menu-item-group>
            </a-sub-menu>
            <a-sub-menu key="demo2" @title-click="titleClick">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #title>2</template>
                <a-menu-item key="5">Option 5</a-menu-item>
                <a-menu-item key="6">Option 6</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="demo3" @title-click="titleClick">
                <template #icon>
                    <SettingOutlined />
                </template>
                <template #title>3</template>
                <a-menu-item key="9">Option 9</a-menu-item>
                <a-menu-item key="10">Option 10</a-menu-item>
                <a-menu-item key="11">Option 11</a-menu-item>
                <a-menu-item key="12">Option 12</a-menu-item>
            </a-sub-menu>
        </a-menu>
    </div>
    <div class="layout-content">
        <RouterView></RouterView>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { Router, useRouter, RouterView } from 'vue-router';
import {
    MailOutlined,
    QqOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from '@ant-design/icons-vue';
const selectedKeys = ref<string[]>(['demo1']);
const openKeys = ref<string[]>(['demo1']);
const router: Router = useRouter();
const handleClick = (e: Event) => {
    console.log('click', e);
    const path = (e as any).keyPath.join('/');
    router.push({
        path: `/demo/${path}`,
    });
};
const titleClick = (e: Event) => {
    console.log('titleClick', e);
};
watch(
    () => selectedKeys,
    (val) => {
        console.log('selectedKeys', val.value);
    },
);
</script>
<style lang="less"></style>
