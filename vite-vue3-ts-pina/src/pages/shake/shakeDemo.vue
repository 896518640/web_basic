<template>
    <div class="app-container">
        <div class="play-main">摇一摇抽奖</div>
        <div class="main"></div>
        <button @click="getPermission">请求授权</button>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
const a = ref(0);
let Angent = navigator.userAgent;
let isAndroid = Angent.indexOf('Android') > -1 || Angent.indexOf('Adr') > -1;
let isIphone = !!Angent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

function getPermission() {
    if (
        typeof window.DeviceMotionEvent !== undefined &&
        typeof (DeviceMotionEvent as any).requestPermission === 'function'
    ) {
        (window.DeviceMotionEvent as any)
            .requestPermission()
            .then((state: any) => {
                if ('granted' === state) {
                    // 用户同意授权
                    alert('用户已同意授权');
                    handler();
                } else {
                    // 用户拒绝授权
                    alert(state);
                    alert(
                        '摇一摇需要授权设备运动权限 请重启应用后，再次进行授权！',
                    );
                }
            })
            .catch((e: any) => {
                alert('error:' + e);
            });
    }
}
function handler() {
    if (window.DeviceMotionEvent) {
        window.addEventListener(
            'devicemotion',
            () => {
                (document.querySelector('.main') as Element).innerHTML =
                    '我在摇';
            },
            false,
        );
    } else {
        alert('该浏览器暂不支持摇一摇功能');
    }
}
function loadConfig() {
    if (window.DeviceMotionEvent) {
        alert('支持');
        // 安卓机
        isAndroid && handler();
        // ios
        // iOS 需要在 http协议下 才能申请到 否则直接denied
        // 经测试 DeviceMotionEvent.requestPermission 和 DeviceOrientaationEvent.requestPermission 只需要调用一次
        isIphone && getPermission();
    } else {
        alert('不支持');
    }
}
onMounted(() => {
    loadConfig();
});
</script>

<style lang="less">
.app-container {
    width: 200px;
    height: 500px;
    background: #fafafa;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    // background: #e0e0e0;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
}
.play-main {
    width: 50px;
    height: 50px;
    // background: #cccc99;
    border-radius: 10px;
    background: #e0e0e0;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
}
</style>
