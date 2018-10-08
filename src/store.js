import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        title: 'To Do List',

        Tasks: [

        ]

    },
    getters: {},
    mutations: {
        ADD_TASK(state, newTask) {
            state.Tasks.push(newTask)
        }
    },
    actions: {}
})
