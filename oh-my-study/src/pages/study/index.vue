<template>
    <div class="app-container">
        <div ref="bullets" class="wrapper">
            <div v-for="item in items" :key="item" class="bullet-screen">
                <div class="screen">{{ item }}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [1, 2, 3, 4, 56, 6, 77],
        };
    },
    mounted() {
        this.triggerScreen();
    },
    methods: {
        triggerScreen() {
            let duration = 1;
            let bullets = thi.$refs.bullets;
            console.log(bullets);
            let scroll = function () {};
        },
    },
};
</script>
<style>
.app-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.wrapper {
    width: 100px;
    height: 120px;
    overflow: hidden;
    border: 1px solid #ddd;
}
.bullet-screen {
    width: 100px;
    height: 30px;
    background: #ddd;
    margin-bottom: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>
