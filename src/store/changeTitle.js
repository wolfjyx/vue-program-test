import {CHANGE_TITLE} from './mutation-types'

const state = {
  title: '联系人'
}

const getters = {
  title: state => state.title
}
const mutations = {
  [CHANGE_TITLE] (status, payload) {
    status.title = payload.title
  }
}

export default {
  state,
  getters,
  // actions,
  mutations
}
