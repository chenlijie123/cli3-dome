import { createStore } from 'vuex'

export default createStore({
  state: {
    isCollapse: false
  },
  getters: {
  },
  mutations: {
    SET_COLLAPSE (state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
    handCollapse ({ commit }, paylod) {
      commit('SET_COLLAPSE')
    }
  },
  modules: {
  }
})
