import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

      names: [
          'Evan You',
          'John Lindquist',
          'Jen Looper',
          'Miriam Suzanne',
          'Chris Coyier',
          'Geoff Graham',
          'Divya Sasidharan',
          'Lea Verou',
          'Rachel Andrew',
          'Vitaly Friedman',
          'Ryan Florence',
          'Dan Abramov',
          'Jen Simmons',
          'Robin Rendle',
          'Nicole Sullivan'
      ]

  },
    getters : {
        filterNames : (state) => (search) => {
            let filter = new RegExp(search, 'i')
            return state.names.filter(el => el.match(filter))
        }

    },
  mutations: {

  },
  actions: {

  }
})
