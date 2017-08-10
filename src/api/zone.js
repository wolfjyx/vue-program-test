import axios from 'axios'
import {url} from './url'
export default {
  zoneInit (data) {
    return axios.get(url + '/zone/init').then(function (response) {
      return response.data
    })
  },
  addZone (data) {
    return axios.post(url + '/zone/add', data).then(function (response) {
      return response.data
    })
  }
  // removeUser (data) {
  //   return axios.post(url + '/user/remove', data).then(function (response) {
  //     return response.data
  //   })
  // }
}
