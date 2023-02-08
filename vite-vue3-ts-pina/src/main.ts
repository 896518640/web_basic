import { createApp } from 'vue';
import './style.css';
import App from './App';
import store from './store';
import router from '@/router';
import Antd from 'ant-design-vue';
import 'ant-design-vue';

// 创建vue 实例
const app = createApp(App);

// 挂在 pinia
app.use(store).use(router).use(Antd);

// 挂载实例
app.mount('#app');
