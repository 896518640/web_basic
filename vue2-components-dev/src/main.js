import Vue from 'vue'
import App from './App.vue'
import router from './Lrouter/index'
import store from './Lstore'

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')