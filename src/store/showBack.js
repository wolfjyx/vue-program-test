import {CHANGE_BACK} from './mutation-types'

const state = {
  showBack: 'menu'
}

const getters = {
  showBack: state => state.showBack
}
const mutations = {
  [CHANGE_BACK] (status, payload) {
    status.showBack = payload.showBack
  }
}

export default {
  state,
  getters,
  // actions,
  mutations
}
