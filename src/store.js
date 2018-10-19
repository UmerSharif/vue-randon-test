import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        title: 'To-Do List',

        Tasks: [
            {
                id : 1,
                Title : 'Just Do It',
                isComplete : false
            }
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

        ON_EDIT_SUBMIT(state, payload) {
            // setting the payload at the found index in the state.
           Vue.set(state.Tasks, state.Tasks.findIndex(item=> item.id === payload.id), payload)
            //console.log(state.Tasks[0].Title)

        }
    },
    actions: {}
})
