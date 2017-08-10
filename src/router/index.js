import Vue from 'vue'
import Router from 'vue-router'
import ChatList from '@/components/ChatList'
import ChatRoom from '@/components/ChatRoom'
import AddUser from '@/components/AddUser'
import Zone from '@/components/Zone'
import Pub from '@/components/Pub'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChatList',
      component: ChatList
    },
    {
      path: '/chatroom/:id',
      name: 'ChatRoom',
      component: ChatRoom
    },
    {
      path: '/add/user',
      name: 'AddUser',
      component: AddUser
    },
    {
      path: '/zone',
      name: 'Zone',
      component: Zone
    },
    {
      path: '/pub',
      name: 'Pub',
      component: Pub
    }
  ]
})
