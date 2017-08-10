import chatList from '../api/chatlist'
import sendMessage from '../api/sendMessage'
import {CHAT_LIST_INIT, SEND_MESSAGE} from './mutation-types'

const state = {
  chatList: []
}
const getters = {
  chatList: state => state.chatList
}

const actions = {
  [CHAT_LIST_INIT] ({commit, state, rootState}, param) {
    chatList.getChatList(param).then(
      (response) => {
        commit(CHAT_LIST_INIT, response)
      },
      (error) => {
        rootState.error = error
      }
    )
  },
  [SEND_MESSAGE] ({commit, state, rootState}, param) {
    sendMessage.sendChatContent(param).then(
      (response) => {
        if (response.code === 0) {
          commit(SEND_MESSAGE, response)
        }
      },
      (error) => {
        rootState.error = error
      }
    )
  }
}

const mutations = {
  [CHAT_LIST_INIT] (state, payload) {
    state.chatList = payload
    document.body.scrollTop = document.body.scrollHeight
  },
  [SEND_MESSAGE] (state, payload) {
    if (payload && payload.isReply) {
      state.chatList.push(payload)
    } else {
      state.chatList.push(payload)
    }
    setTimeout(function () {
      document.body.scrollTop = document.body.scrollHeight
    }, 0)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

