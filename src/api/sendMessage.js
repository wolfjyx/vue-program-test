/**
 * Created by wolfjyx on 2017/7/21.
 */
import axios from 'axios'
import {url} from './url'
export default {
  sendChatContent (data) {
    console.log(data, 'data')
    return axios.post(url + '/send/chat/lists', data).then(function (response) {
      return response.data
    }).catch(function (err) {
      console.log(err)
    })
  }
}
