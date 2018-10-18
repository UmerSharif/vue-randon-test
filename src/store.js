import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        title: 'To-Do List',

        Tasks: [

        ]

    },
    getters: {},
    mutations: {
        ADD_TASK(state, newTask) {
            state.Tasks.push(newTask)
        },

        DELETE_TASK(state, index){
            state.Tasks.splice(index,1)
        },

        ON_EDIT_SUBMIT(state, payload){
           console.log(payload.index)
        }
    },
    actions: {}
})
