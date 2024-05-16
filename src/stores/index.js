import { createStore } from 'vuex'
import api from '@/api'

export default createStore({
  state: {
    sideList: []
  },
  mutations: {
    setSideList(state, sideList) {
      state.sideList = sideList
    }
  },
  actions: {
    async axiosGetSideList({ commit }, type) {
      const res = await api.getSideList(type)
      commit('setSideList', res.data)
    }
  },
  getters: {
    getSideList(state) {
      return state.sideList
    }
  }
})
