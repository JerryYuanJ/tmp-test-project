<template>
  <div class="hello">
    <mt-button type="primary" @click="goPage('/richText')" size="small">测试富文本</mt-button>
    <mt-button type="primary" @click="goPage({name:'DataTable'})" size="small">测试element表格</mt-button>
    <mt-button type="primary" @click="goPage({path:'/subRouter'})" size="small">测试嵌套子路由</mt-button>
    <mt-button type="primary" @click="goPage('/tabModal')" size="small">测试底部Tab</mt-button>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
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
    flex-direction: column;
  }

  .mint-button {
    margin-top: 10px;
    height: 40px;
    line-height: 40px;
  }
</style>
