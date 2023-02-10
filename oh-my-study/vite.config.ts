import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import * as path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
        // 设置别名
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    server: {
        port: 9999,
        hmr: {
            host: '127.0.0.1',
            port: 9999,
        },
        // 设置https 代理
        proxy: {
            '/api': {
                target: '',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, ''),
            },
        },
    },
});
