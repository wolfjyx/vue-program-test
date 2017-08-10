/**
 * Created by wolfjyx on 2017/7/21.
 */
import axios from 'axios'
import {url} from './url'
export default {
  getChatList (data) {
    console.log(data, 'data')
    return axios.get(url + '/chat/list/init', {params: data}).then(function (response) {
      return response.data
    }).catch(function (err) {
      console.log(err)
    })
  }
}
