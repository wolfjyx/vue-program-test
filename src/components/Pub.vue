<template>
  <div class="container">
    <textarea v-model.trim="content" class="content" placeholder="说点什么"></textarea>
    <button class="submit" @click="pub">发布</button>
  </div>
</template>

<script>
  import * as mutation from '../store/mutation-types'
  import Zone from '../api/zone'
  export default {
    name: 'zone',
    beforeCreate: function () {
      this.$store.commit({
        type: mutation.CHANGE_TITLE,
        title: '发布'
      })
      this.$store.commit({
        type: mutation.CHANGE_BACK,
        showBack: 'back'
      })
    },
    data () {
      return {
        content: ''
      }
    },
    methods: {
      pub: function () {
        console.log(this.content)
        if (this.content && this.content !== '') {
          Zone.addZone({content: this.content}).then(
            (response) => {
              if (response.code === 0) {
                this.$store.commit(mutation.ZONE_INIT, {list: [response.data], add: true})
                this.$router.back()
              }
            },
            (error) => {
              console.log(error)
            })
        }
      }
    }
  }
</script>

<style scoped lang="sass">
@import "../assets/_nibs"
.container
  margin-top: rem(90)
  text-align: center
  .content
    width: 98%
    margin: 0 auto
    border-width: 0
    border-bottom: 1px solid #bfbfbf
    overflow-y: visible
    outline: none
    resize: none
    height: rem(200)
  .submit
    width: 90%
    /*height: rem(50)*/
    font-size: rem(24)
    padding: rem(16)
    line-height: 1
    margin: rem(20) auto
    background: #00a1e5
    border: 0
    border-radius: 5px
    outline: none
</style>
