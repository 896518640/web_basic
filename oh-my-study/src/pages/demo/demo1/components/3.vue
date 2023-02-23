<template>
    <transition-group name="my-transition" tag="ul">
        <li
            v-for="(item, index) in items"
            :key="index"
            @click="removeItem(index)"
        >
            {{ item }}
        </li>
    </transition-group>
</template>
<script>
export default {
    data() {
        return {
            items: [1, 2, 3, 4, 5, 5],
        };
    },
    methods: {
        removeItem(index) {
            this.items.slice(index, 1);
        },
    },
};
</script>
<style>
.my-transition-enter-active {
    transition: all 0.3s ease;
}

.my-transition-enter,
.my-transition-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>
