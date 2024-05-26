import { createStore } from 'vuex'
import api from '@/api'

export default createStore({
  state: {
    sideList: [],
    goodList: [],
    filteredGoodList: [],
    userData: {},
    signin: {},
    match: 'false'
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
      state.userData = userData
    },
    setSignin(state, signin) {
      state.signin = signin
    },
    setMatch(state, match) {
      state.match = match
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
      if (response.data == true) {
        commit('setUserData', data)
      }
      return response.data
    },
    async axiosGetUserData({ commit }, value) {
      const res = await api.FindUserServlet(value)

      commit('setSignin', res.data.userdata)
      commit('setMatch', res.data.match)
      return res.data.match
    },
    async axiosSetFilteredGoodList({ commit }, filteredGoodList) {
      const response = await api.addCardsServlet(filteredGoodList)
      if (response.data == true) {
        commit('setFilteredGoodList', [])
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
    },
    getSignin(state) {
      return state.signin
    }
  }
})
