import autoprefixer from 'autoprefixer'
import px2rem from 'postcss-plugin-px2rem'
import { createVuePlugin } from 'vite-plugin-vue2'
export default {
    plugins: [createVuePlugin()],
}