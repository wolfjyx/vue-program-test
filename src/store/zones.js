import Zone from '../api/zone'
import {ZONE_INIT} from './mutation-types'
const state = {
  zoneList: []
}

const getters = {
  zoneList: state => state.zoneList
}

const actions = {
  [ZONE_INIT] ({commit, state, rootState}, param) {
    Zone.zoneInit(param).then(
      (response) => {
        if (response.code === 0) {
          commit(ZONE_INIT, {list: response.data, add: false})
        }
      },
      (error) => {
        rootState.error = error
      })
  }
}

const mutations = {
  [ZONE_INIT] (state, payload) {
    state.zoneList = (payload.add ? state.zoneList : []).concat(payload.list)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
