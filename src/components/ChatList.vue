<template>
  <div class="container">
    <div v-for="(item, index) in userList"  @click="enterChatRoom(index)" class="item">
      <span>{{ item.name }}</span>
      <span  class="delete" @click.stop="deleteUser(index)">删除</span>
    </div>
  </div>
</template>

<script>
  import * as mutation from '../store/mutation-types'
  import { mapGetters } from 'vuex'
  export default{
    name: 'chat-line',
    beforeCreate: function () {
      this.$store.commit({
        type: mutation.CHANGE_BACK,
        showBack: 'menu'
      })
      this.$store.commit({
        type: mutation.CHANGE_TITLE,
        title: '联系人'
      })
      this.$store.dispatch(mutation.USER_LIST_INIT)
    },
    computed: {
      ...mapGetters([
        'userList'
      ])
    },
    data () {
      return {
        chatList: [{
          name: '你的名字',
          msg: '我的',
          id: '1'
        }, {
          name: '大爷的',
          msg: '发',
          id: '2'
        }]
      }
    },
    methods: {
      enterChatRoom (index) {
        this.$router.push('/chatroom/' + this.userList[index].id + '?name=' + this.userList[index].name)
      },
      deleteUser (index) {
        console.log(index)
        this.$store.dispatch(mutation.REMOVE_USER, {index: index})
      }
    }
  }
</script>

<style scoped lang="sass">
@import "../assets/_nibs"
.container
  margin-top: rem(70)
.item
  width: 100%
  height: rem(80)
  line-height: rem(80)
  border-bottom: 1px solid #e8e8e8
  position: relative
  .delete
    position: absolute
    top: rem(20)
    right: rem(20)
    font-size: rem(14)
    background: rgba(0,0,0,.8)
    color: #fff
    width: rem(70)
    height: rem(40)
    text-align: center
    line-height: rem(40)
    border-radius: 2px
    &:before
      content: ''
</style>

