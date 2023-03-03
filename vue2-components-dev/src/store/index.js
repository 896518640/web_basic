// vuex 集中式  的存储状态    可预测 的变更
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        counter:0
    },
    mutations: {
        add(state) {
            state.counter++
        }
    },
    actions: {
        add({commit,dispatch,state}) {
            setTimeout(() => {
                commit('add')
            }, 1000);
        }
    },
    modules: {

    }
})