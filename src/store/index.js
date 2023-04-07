// import Vue from 'vue'
// import Vuex from 'vuex'

import crm from './modules/crm'
// import user from './modules/user'
// import permission from './modules/permission'
import getters from './getters'
// Vue.use(Vuex)
import { createStore } from 'vuex'
const store = createStore({

  modules: {
    crm
    // user,
    // permission
  },
  getters
})

export default store
