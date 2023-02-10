import { defineStore } from 'pinia';
type themeType = 'light' | 'dark';
export const useThemeStore = defineStore({
    id: 'theme',
    state: () => {
        return {
            theme: 'light',
        };
    },
    actions: {
        updateTheme(type: themeType): void {
            console.log('update', type);
            this.theme = type;
        },
    },
});
