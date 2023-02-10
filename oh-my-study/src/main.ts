import { createApp } from 'vue';
// import './style.css';
import App from './App.vue';
import store from '@/store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
// 使用中间件
app.use(store).use(Antd);
// 挂载
app.mount('#app');
