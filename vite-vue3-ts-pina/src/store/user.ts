import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',
    state: () => {
        return {
            name: '张三',
        };
    },
    actions: {
        updateName(name: string): void {
            this.name = name;
        },
    },
});
