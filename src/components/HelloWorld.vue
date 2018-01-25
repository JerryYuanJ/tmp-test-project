<template>
  <div class="hello">
    <mt-button type="primary" @click="goPage('/richText')" size="small">测试富文本</mt-button>
  </div>
</template>

<script>
  export default {
    name: 'RichTextPage',
    data () {
      return {}
    },
    methods: {
      goPage(name){
          this.$router.push(name)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
