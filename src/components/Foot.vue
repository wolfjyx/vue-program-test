<template>
  <div class="bottom-tab">
    <div v-for="tab in tabs" class="tab-three" @click="changetab(tab.id)">{{tab.name}}</div>
  </div>
</template>

<script>
  export default {
    name: 'foottab',
    data () {
      return {
        tabs: [{
          name: '联系人',
          id: '1'
        }, {
          name: '动态',
          id: '2'
        }
        ]
      }
    },
    methods: {
      changetab (id) {
        switch (parseInt(id)) {
          case 1:
            console.log(id)
            this.$router.push('/')
            break
          case 2:
            this.$router.push('/zone')
            break
          default:
            break
        }

//        this.$store.commit({
//          type: 'CHANGE_TITLE',
//          title: this.tabs[id - 1].name
//        })
      }
    }
  }
</script>

<style lang="sass" scoped>
@import "../assets/_nibs"
.bottom-tab
  background: #fff
  position: fixed
  bottom: 0
  height: rem(60)
  width: 100%
  border-top: rem(2) solid #c0c0c0
  .tab-three
    width: 50%
    text-align: center
    display: inline-block
    line-height: rem(60)
</style>
