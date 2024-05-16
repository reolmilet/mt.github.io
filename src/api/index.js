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
const getSideList = (value) => instance.get(URLs.getSide, { parmas: { type: value } })

export default {
  getSideList
}
