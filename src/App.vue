<template>
  <div id="app">
    <Hello></Hello>
    <router-view></router-view>
    <Foot></Foot>
  </div>
</template>

<script>
//  import Foot from '@/componets/Foot'

  import Hello from '@/components/Header'
  import Foot from '@/components/Foot'
  export default {
    components: {
      Hello,
      Foot
    }
  }
</script>

<style lang="sass">
  @import "./assets/_normalize"
  @import "./assets/_common"
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    /*text-align: center*/
    color: #2c3e50
    /*margin-top: 60px*/

</style>
