<template>
    <div class="app-container">
        <div class="app-content">
            <div v-for="item in linkData" :key="item.type" class="content-item">
                <div class="class-title">{{ item.type }}</div>
                <div class="class-content">
                    <div
                        v-for="link in item.list"
                        :key="link.name"
                        class="link-item"
                        @click="handleLink(link.link)"
                    >
                        <div class="link-name">{{ link.name }}</div>
                        <div class="link-info">{{ link.info }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';

interface Item {
    name: string;
    link: string;
    info: string;
}
interface LinkItem<T> {
    type: string;
    list: T[];
}

function handleLink(link: string): void {
    console.log(link);
    // window.location.href = link;
}
const linkData = <LinkItem<Item>[]>reactive([
    {
        type: 'codeWeb',
        list: [
            {
                name: 'dev.to',
                link: 'www.baidu.com',
                info: '拥有百万开发者的技术社区，开发者分享交流，获取最新技术咨询，提高专业能力的好地方',
            },
            {
                name: 'dev.to',
                link: 'www.baidu.com',
                info: '拥有百万开发者的技术社区，开发者分享交流，获取最新技术咨询，提高专业能力的好地方',
            },
            {
                name: 'dev.to',
                link: 'www.baidu.com',
                info: '拥有百万开发者的技术社区，开发者分享交流，获取最新技术咨询，提高专业能力的好地方',
            },
            {
                name: 'dev.to',
                link: 'www.baidu.com',
                info: '拥有百万开发者的技术社区，开发者分享交流，获取最新技术咨询，提高专业能力的好地方',
            },
            {
                name: 'dev.to',
                link: 'www.baidu.com',
                info: '拥有百万开发者的技术社区，开发者分享交流，获取最新技术咨询，提高专业能力的好地方',
            },
            {
                name: 'dev.to',
                link: 'www.baidu.com',
                info: '拥有百万开发者的技术社区，开发者分享交流，获取最新技术咨询，提高专业能力的好地方',
            },
            {
                name: 'dev.to',
                link: 'www.baidu.com',
                info: '拥有百万开发者的技术社区，开发者分享交流，获取最新技术咨询，提高专业能力的好地方',
            },
        ],
    },
    {
        type: 'tools',
        list: [
            {
                name: 'dev.to',
                link: 'www.baidu.com',
                info: '拥有百万开发者的技术社区，开发者分享交流，获取最新技术咨询，提高专业能力的好地方',
            },
        ],
    },
]);
</script>

<style lang="less">
.app-container {
    width: 100%;
    height: 800px;
    padding: 50px 0;
    .app-content {
        background: var(--sidebar-background);
        width: 1000px;
        height: 100%;
        margin: 0 auto;
        // border: 1px solid var(--vt-c-divider-dark);
        border-radius: 10px;
        // background: #e0e0e0;
        padding: 10px;
        box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
        .content-item {
            width: 100%;
            height: auto;
            border-bottom: 1px solid var(--vt-c-divider-dark);
            margin-bottom: 30px;
            .class-title {
                font-size: 30px;
                font-weight: 100;
            }
            .class-content {
                width: 100%;
                height: auto;
                display: flex;
                flex-wrap: wrap;
                // border: 1px solid var(--vt-c-divider-dark);
                .link-item {
                    flex: 0 0 25%;
                    width: 200px;
                    height: 100px;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
