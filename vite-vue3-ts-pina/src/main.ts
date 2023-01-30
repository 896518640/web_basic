import { createApp } from 'vue';
import './style.css';
import App from './App';
import store from './store';
import router from '@/router';

// 创建vue 实例
const app = createApp(App);

// 挂在 pinia
app.use(store).use(router);

// 挂载实例
app.mount('#app');
