<template>

</template>
<template>
  <header>
    <div class="scale">
      <div class="avatar pull-left"><img src="../assets/logo.png"></div>
      <div class="header-title">{{ title }}</div>
      <div class="message pull-right">
        <span class="hor-line"></span><span class="hor-line"></span><span class="hor-line"></span>
      </div>
    </div>
  </header>

</template>


<script>
  export default {
    name: 'profile',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        title: 'title'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import "../assets/_nibs"
  header
    height: rem(70)
    @include bgShadeLeft(#00a1e5,#6a92f7)
    .scale
      height: 100%
      .avatar
        width: 10%
        img
          width: 100%
          margin: rem(10)
    .header-title
      width: 60%
      text-align: center
      padding: rem(20) rem(5)
      @include middle
      font-size: rem(24)
    .message
      .hor-line
        @include lines
        color: #bfbfbf
        width: rem(50)
</style>
