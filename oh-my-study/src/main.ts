import { createApp } from 'vue';
// import './style.css';
import App from './App.vue';
import store from '@/store';
import router from '@/router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'css-doodle';
const app = createApp(App);
// 使用中间件
app.use(store).use(Antd).use(router);
// 挂载
app.mount('#app');
