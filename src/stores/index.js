import { createStore } from 'vuex'
import api from '@/api'

export default createStore({
  state: {
    sideList: [],
    goodList: [],
    filteredGoodList: []
  },
  mutations: {
    setSideList(state, sideList) {
      state.sideList = sideList
    },
    setGoodList(state, goodList) {
      state.goodList = goodList
    },
    setFilteredGoodList(state, filteredGoodList) {
      state.filteredGoodList = filteredGoodList
    }
  },
  actions: {
    async axiosGetSideList({ commit }, type) {
      const res = await api.getSideList(type)

      commit('setSideList', res.data)
    },
    async axiosGetGoodsList({ commit }, value) {
      const res = await api.getGoodsList(value)

      commit('setGoodList', res.data)
    }
  },
  getters: {
    getSideList(state) {
      return state.sideList
    },
    getGoodList(state) {
      return state.goodList
    },
    getFilteredGoodList(state) {
      return state.filteredGoodList
    }
  }
})
