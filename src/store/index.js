import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dictionaries: [
      {
        id: 1,
        rules: [
          {
            from: 'ph',
            to: 'Biology'
          },
          {
            from: 'Atoms',
            to: 'Chemistry'
          },
          {
            from: 'Circuit Building',
            to: 'Physics'
          }
        ]
      },
      {
        id: 2,
        rules: [
          {
            from: 'a',
            to: 'Biology'
          },
          {
            from: 'b',
            to: 'Chemistry'
          },
          {
            from: 'c',
            to: 'Physics'
          }
        ]
      }
    ]
  },
  mutations: {
    removeDictionary (state, id) {
      const idx = state.dictionaries.findIndex(d => d.id === id)

      if (idx > -1) {
        state.dictionaries.splice(idx, 1)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
