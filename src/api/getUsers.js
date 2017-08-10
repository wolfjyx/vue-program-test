import axios from 'axios'
import {url} from './url'
export default {
  getUserList (data) {
    return axios.get(url + '/user/list').then(function (response) {
      return response.data
    })
  },
  addUser (data) {
    return axios.post(url + '/user/add', data).then(function (response) {
      return response.data
    })
  },
  removeUser (data) {
    return axios.post(url + '/user/remove', data).then(function (response) {
      return response.data
    })
  }
}
