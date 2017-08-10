<template>
  <div class="container">
    <dl class="chatcontainer">
      <dd class="session" v-for="message in chatList">
        <div class="session-content"  v-bind:class="[message.isReply ? 'pull-left' : 'pull-right']">
          {{message.content}}
        </div>
      </dd>
    </dl>
    <div class="input-box">
      <textarea  id="message" cols="30" rows="1" v-model="content" @keyup.enter="send"></textarea>
      <button class="submit" @click="send">发送</button>
    </div>
  </div>
</template>

<script>
  import * as mutation from '../store/mutation-types'
  import {mapGetters} from 'vuex'
  export default {
    name: 'chatroom',
    beforeCreate: function () {
      console.log(this.$route)
      this.$store.dispatch(mutation.CHAT_LIST_INIT, this.$route.params)
      this.$store.commit({
        type: mutation.CHANGE_TITLE,
        title: this.$route.query.name
      })
      this.$store.commit({
        type: mutation.CHANGE_BACK,
        showBack: 'back'
      })
    },
    computed: {
      ...mapGetters([
        'chatList'
      ])
    },
    data () {
      return {
        content: '',
        roomId: this.$route.params.id,
        messageList: [{
          owner: true,
          content: 'hello'
        }, {
          owner: false,
          content: 'hi'
        }]
      }
    },
    methods: {
      send () {
        if (this.content) {
          this.$store.commit(mutation.SEND_MESSAGE, {content: this.content, isReply: false})
          this.$store.dispatch(mutation.SEND_MESSAGE, {content: this.content, id: this.roomId})

          this.content = ''
        }
      }
    }
  }
</script>

<style scoped lang="sass">
@import "../assets/nibs"
.chatcontainer
  margin-top: rem(80)
  width: 100%
  .session
    width: 100%
    height: 100%
    overflow: hidden
    margin: 0
    padding: 0
    margin-bottom: rem(20)
    .session-content
      border-radius: rem(5)
      padding: rem(5) rem(10)
      max-width: 60%
    .pull-left
      background: #00a1e5
      margin-left: rem(10)
    .pull-right
      background: #e8e8e8
      margin-right: rem(10)
.input-box
  position: fixed
  bottom: rem(60)
  background: #fff
  width: 100%
  #message
    margin-left: rem(5)
    border: 1px solid #bfbfbf
    border-radius: 5px
    overflow-y: visible
    width: 80%
    outline: none
    resize: none
    height: rem(50)
  .submit
    width: rem(70)
    height: rem(40)
    background: #00a1e5
    border-radius: 5px
    position: absolute
    right: rem(5)
    bottom: rem(6)
    border: 2px solid #00a1e5
    outline: none
</style>
