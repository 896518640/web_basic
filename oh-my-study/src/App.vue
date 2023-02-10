<script setup lang="ts">
import Layout from '@/layout/Layout.vue';
</script>

<template>
    <div class="container">
        <Layout />
    </div>
</template>

<style scoped lang="less">
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
