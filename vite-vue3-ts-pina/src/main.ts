import { createApp } from 'vue'
import './style.css'
import App from './App'
import store from './store'

// const modules = import.meta.glob('./pages/**/*.tsx')
// console.log('step-1,modules', modules)
// for (const module in modules) {
//     const mod = modules[module]()
//     console.log('step-2, module',mod)
//     for (const key in mod) {
//        console.log('key', key)
//     }


//     mod.then(res=> {
//         console.log('res',res)
//     })
// }
// 创建vue 实例
const app = createApp(App)

// 挂在 pinia
app.use(store)

// 挂载实例
app.mount('#app')
