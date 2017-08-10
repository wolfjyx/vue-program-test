import UserList from '../api/getUsers'
import {USER_LIST_INIT, REMOVE_USER} from './mutation-types'
const state = {
  userList: []
}
const getters = {
  userList: state => state.userList
}

const actions = {
  [USER_LIST_INIT] ({commit, state, rootState}, param) {
    UserList.getUserList(param).then(
      (response) => {
        commit(USER_LIST_INIT, {list: response, add: false})
      },
      (error) => {
        rootState.error = error
      }
    )
  },
  [REMOVE_USER] ({commit, state, rootState}, param) {
    UserList.removeUser({id: state.userList[param.index].id}).then(
      (response) => {
        state.userList.splice(param.index, 1)
      },
      (error) => {
        rootState.error = error
      }
    )
  }
}

const mutations = {
  [USER_LIST_INIT] (state, payload) {
    state.userList = (payload.add ? state.userList : []).concat(payload.list)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

