import { createStore } from 'vuex'
import api from '@/api'

export default createStore({
  state: {
    sideList: [],
    goodList: [],
    filteredGoodList: [],
    userData: {}
  },
  mutations: {
    setSideList(state, sideList) {
      state.sideList = sideList
    },
    setGoodList(state, goodList) {
      goodList = goodList.map((item) => {
        const foundItem = state.filteredGoodList.find((filteredItem) => filteredItem.id === item.id)
        return foundItem ? foundItem : item
      })
      state.goodList = goodList
    },
    setFilteredGoodList(state, filteredGoodList) {
      state.filteredGoodList = filteredGoodList.filter((item) => item.count > 0)
    },
    setUserData(state, userData) {
      console.log(userData)
      state.userData = userData
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
    },
    async axiosSetUserData({ commit }, data) {
      const response = await api.addUsersServlet(data)
      console.log(response.data)
      if (response.data == true) {
        console.log(data)
        commit('setUserData', data)
      }
      return response.data
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
    },
    getUserData(state) {
      return state.userData
    }
  }
})
