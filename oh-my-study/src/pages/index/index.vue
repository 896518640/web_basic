<template>
    <div class="layout-sidebar">
        <div class="btn" @click="handleUpdate">
            <div class="g-container">
                <div class="word">Hello World!</div>
                <div class="word">13</div>
                <div class="word">Pro</div>
                <div class="word">强的很！</div>
            </div>
        </div>
    </div>
    <div class="layout-content">
        <css-doodle>
            :doodle { @grid: 1x8 / 100vmin; } @place-cell: center; width:
            @rand(40vmin, 80vmin); height: @rand(40vmin, 80vmin); transform:
            translate(@rand(-200%, 200%), @rand(-60%, 60%)) scale(@rand(.8,
            1.8)) skew(@rand(45deg)); clip-path: polygon( @r(0, 30%) @r(0, 50%),
            @r(30%, 60%) @r(0%, 30%), @r(60%, 100%) @r(0%, 50%), @r(60%, 100%)
            @r(50%, 100%), @r(30%, 60%) @r(60%, 100%), @r(0, 30%) @r(60%, 100%)
            ); background: @pick(#f44336, #e91e63, #9c27b0, #673ab7, #3f51b5,
            #60569e, #e6437d, #ebbf4d, #00bcd4, #03a9f4, #2196f3, #009688,
            #5ee463, #f8e645, #ffc107, #ff5722, #43f8bf); opacity: @rand(.3,
            .8); position: relative; top: @rand(-80%, 80%); left: @rand(-80%,
            80%); animation: colorChange @rand(6.1s, 16.1s) infinite @rand(-.5s,
            -2.5s) linear alternate; @keyframes colorChange { 100% { left: 0;
            top: 0; filter: hue-rotate(360deg); } }
        </css-doodle>
    </div>
</template>

<script lang="ts" setup>
import { onUnmounted } from 'vue-demi';
import { message } from 'ant-design-vue';
let mainElement = document.querySelector('.layout-main');
let headElement = document.querySelector('.layout-header');
// document.body.classList.add('animate');
(mainElement as Element).classList.add('animate');
(headElement as Element).classList.add('static');

function handleUpdate() {
    const doodle = document.querySelector('css-doodle');
    document.addEventListener('click', function (e: any) {
        (doodle as Element).update();
    });
    message.loading('切换背景中...', 0.3).then(
        () => message.success('背景切换完成', 1.5),
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        () => {
            message.success('sda', 0.5);
        },
    );
}

onUnmounted(() => {
    // document.body.classList.remove('animate');
    (mainElement as Element).classList.remove('animate');
    (headElement as Element).classList.remove('static');
});
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

$speed: 8s;
$wordCount: 4;

.g-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    // background: #000;
    font-family: 'Montserrat', sans-serif;
    color: #000;
    font-size: 120px;
    filter: contrast(15);
}
.word {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: change $speed infinite ease-in-out;

    @for $i from 0 to $wordCount {
        &:nth-child(#{$i + 1}) {
            animation-delay: ($speed / ($wordCount + 1) * $i) - $speed;
        }
    }
}
@keyframes change {
    0%,
    5%,
    100% {
        filter: blur(0px);
        opacity: 1;
    }
    50%,
    80% {
        filter: blur(80px);
        opacity: 0;
    }
}
</style>
<style lang="less">
.static {
    // position: static;
}
.layout-content {
    background-color: #fff !important;
}
.animate {
    position: relative;
    margin: 0;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    // overflow: hidden;
    background-color: #fff !important;
    transition: all 0.3s;
}

.animate::after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(150px);
    z-index: 1;
    transition: all 0.3s;
}
.btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    color: #000;
    z-index: 10;
}
</style>
