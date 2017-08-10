<template>
  <header>
    <div class="scale">
      <div class="avatar pull-left"><img src="../assets/logo.png"></div>
      <div class="header-title">{{title}}</div>
      <div class="message pull-right">
        <span v-show="showBack=='back'" @click="back">返回</span>
        <div v-show="showBack=='menu'" @click="showNavDrop">
          <span class="hor-line"></span><span class="hor-line"></span><span class="hor-line"></span>
        </div>
        <div class="pub" v-show="showBack=='pub'" @click="toPub">发布</div>
        <span class="pub" v-show="showBack=='submit'">确认</span>
        <div class="nav" v-show="showNav">
          <div class="drop-menu" @click="showConfrimModal">添加</div>
          <!--<div class="drop-menu" >什么</div>-->
        </div>
      </div>

    </div>
    <div v-show="showConfrim" class="modal-confrim">
      <div class="confrim">
        <input v-model.trim="name" type="text" class="user-name" placeholder="输入名字">
        <button class="cancel button" @click="showConfrimModal">取消</button>
        <button class="add button" @click="addUsers">添加</button>
      </div>
    </div>
  </header>
</template>


<script>
import {mapGetters} from 'vuex'
import addUser from '../api/getUsers'
import * as mutation from '../store/mutation-types'
export default {
  name: 'header',
  data () {
    return {
      msg: '',
      showNav: false,
      showConfrim: false,
//      showBack: false,
      name: ''
    }
  },
  computed: {
    ...mapGetters([
      'title',
      'showBack'
    ])
  },
  methods: {
    showConfrimModal: function () {
      this.showConfrim = !this.showConfrim
    },
    showNavDrop: function () {
      this.showNav = !this.showNav
    },
    addUsers: function () {
      addUser.addUser({name: this.name}).then(
        (response) => {
          if (response.code === 0) {
            this.$store.commit(mutation.USER_LIST_INIT, {list: [response.data], add: true})
            this.showConfrimModal()
          }
        },
        (error) => {
          console.log(error)
        }
      )
    },
    back: function () {
      this.$router.back()
    },
    toPub: function () {
      this.$router.push('/pub')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import "../assets/_nibs"
  header
    position: fixed
    top: 0
    height: rem(70)
    width: 100%
    z-index: 1
    @include bgShadeLeft(#00a1e5,#6a92f7)
    .scale
      height: 100%
      width: 100%
      .avatar
        width: rem(50)
        img
          width: 100%
          height: 100%
          margin: rem(10)
    .header-title
      display: inline-block
      width: rem(150)
      text-align: center
      padding: rem(20) rem(5)
      margin-left: rem(100)
      font-size: rem(24)
    .message
      position: relative
      width: rem(70)
      margin-top: rem(18)
      .hor-line
        height: rem(4)
        background: #fff
        width: rem(40)
        display: block
        margin: rem(6) auto
      .nav
        width: rem(80)
        border-radius: 5px
        background: #333
        position: absolute
        top: rem(40)
        right: rem(10)
        box-shadow: rem(1) rem(1) rem(3) #333
        &:before
          content: ''
          border-width: 0 rem(10) rem(10)
          border-style: solid
          border-color: transparent transparent #333
          position: absolute
          top: rem(-8)
          right: rem(10)
          width: 0
          height: 0
        .drop-menu
          border-bottom: 1px solid #666
          color: #dcdcdc
          padding: rem(10) rem(15)
          font-size: rem(14)
          text-align: center
          &:last-child
            border-bottom: 0px solid #333
  .modal-confrim
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: rgba(0,0,0,.6)
    .confrim
      width: 80%
      height: rem(200)
      border: 1px solid #00a1e5
      background: #fff
      position: fixed
      top: 50%
      left: 50%
      margin-left: -40%
      margin-top: rem(-100)
      text-align: center
      .user-name
        width: 80%
        border: 1px solid #e8e8e8
        outline: none
        display: block
        border-radius: rem(5)
        margin: rem(30) auto
        height: rem(50)
      .button
        background-color: #fff
        text-align: center
        color: #666666
        border: 1px solid #e8e8e8
        display: inline-block
        overflow: hidden
        border-radius: 3px
        width: rem(90)
        height: rem(50)
        margin: 0 rem(20)
        outline: none

</style>
