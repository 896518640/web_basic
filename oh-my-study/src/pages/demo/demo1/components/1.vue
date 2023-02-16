<template>
    请查看控制台
    <button @click="singleTest()">单线程测试</button>
    <button @click="workerTest()">多线程测试</button>
</template>
<script lang="ts" setup>
import worker from './worker.js?worker';

let number = 10;
function singleTest() {
    console.log('%c 开始单线程测试', 'color:#fff;background:#00897b');
    function fb(n: number): number {
        if (n === 1 || n === 2) {
            return 1;
        }
        return fb(n - 1) + fb(n - 2);
    }
    console.time('单线程执行时间');
    for (let i = 0; i < number; i++) {
        const res = fb(45);
        console.log({
            data: res,
            name: 'single test',
        });
    }
    console.timeEnd('单线程执行时间');
}

function workerTest() {
    console.log('%c 开始多线程测试', 'color:#fff;background:#00897b');
    const workerList = [];
    for (let i = 0; i < number; i++) {
        const workerItem = new Promise((resolve, reject) => {
            const myWorker = new worker();

            myWorker.postMessage({
                function: 'fb',
                data: 45,
            });
            myWorker.onmessage = (e) => {
                resolve(e.data);
                // 关闭worker 现成
                myWorker.terminate();
            };
        });
        workerList.push(workerItem);
    }
    console.time('worker多线程执行时间');
    Promise.all(workerList).then((res) => {
        console.log(res);
        console.timeEnd('worker多线程执行时间');
    });
}
</script>

<style></style>
