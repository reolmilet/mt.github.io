import Axios from 'axios'
import baseURL from './URL'
import { URLs } from './URL'
const appkey = 'reol_1714994487599'
const instance = Axios.create({
  baseURL,
  params: {
    appkey
  }
})
const getSideList = (value) => instance.get(URLs.getSide, { params: { type: value } })
const getGoodsList = (value) =>
  instance.get(URLs.getGoodsList, {
    params: { type: value.type, page: value.page, size: value.size, sort: value.sort }
  })
const addUsersServlet = (value) =>
  instance.post(URLs.addUsersServlet, `username=${value.userName}&password=${value.password}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
const FindUserServlet = (value) =>
  instance.get(URLs.FindUserServlet, {
    params: { username: value.userName, password: value.password }
  })
const addCardsServlet = (filteredGoodList) =>
  instance.post(URLs.addCardsServlet, JSON.stringify(filteredGoodList), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

export default {
  getSideList,
  getGoodsList,
  addUsersServlet,
  FindUserServlet,
  addCardsServlet
}
