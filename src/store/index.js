import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    principle:null
  },
  mutations: {
  },
  actions: {
    setPrinciple(state,principle){
      state.principle=principle;
    }
  },
  modules: {
  }
})
