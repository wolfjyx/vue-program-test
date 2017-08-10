import Vue from 'vue'
import Vuex from 'vuex'

import ChangeTitle from './changeTitle'
import GetUser from './getUser'
import ChatList from './getchatList'
import ChangBack from './showBack'
import Zone from './zones'

Vue.use(Vuex)
const state = {
  requesting: false,
  error: {}
}

const getters = {
  requesting: state => state.requesting,
  error: state => state.error
}

export default new Vuex.Store({
  state,
  getters,
  modules: {
    ChangeTitle,
    GetUser,
    ChatList,
    ChangBack,
    Zone
  }
})

