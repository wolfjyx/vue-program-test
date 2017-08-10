<template>
  <div class="container">
    <dl>
      <dd v-for="(item,index) in zoneList" class="item">
        <div class="cell">
          <div class="user-info">
            <img src="../assets/logo.png" alt="">
            <span class="nick">{{item.nick}}</span>
          </div>
          <div class="content">{{item.content}}</div>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
import * as mutation from '../store/mutation-types'
import { mapGetters } from 'vuex'
export default {
  name: 'zone',
  beforeCreate: function () {
    this.$store.commit({
      type: mutation.CHANGE_TITLE,
      title: '动态'
    })
    this.$store.commit({
      type: mutation.CHANGE_BACK,
      showBack: 'pub'
    })
    this.$store.dispatch(mutation.ZONE_INIT)
  },
  computed: {
    ...mapGetters([
      'zoneList'
    ])
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="sass">
@import "../assets/_nibs"
.container
  margin-top: rem(80)
  .item
    margin-left: 0
    border-bottom: rem(12) solid #efefef
    &:last-child
      border-width: 0
  .user-info
    min-height: rem(50)
    margin: rem(20) rem(10) 0
    font-size: rem(24)
    line-height: 1.5
    color: #999
    img
      float: left
      width: rem(40)
      height: rem(40)
      border-radius: 50%
    .nick
      max-width: rem(360)
      font-size: rem(24)
      white-space: nowrap
      text-overflow: ellipsis
      overflow: hidden
      vertical-align: top
  .content
    padding: 0 rem(20)
    margin-top: rem(5)
    margin-bottom: rem(10)
    font-size:  rem(18)
    line-height: rem(36)
    overflow: hidden
    word-break: break-all
    word-wrap: break-word
    text-align: justify
</style>
