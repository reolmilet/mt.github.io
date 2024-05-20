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
export default {
  getSideList,
  getGoodsList
}
