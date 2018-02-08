<!--
    @CreationDate:2018/1/31
    @Author:Joker
    @Usage:嵌套子路由测试
-->
<template>
  <div class="sub-router">
    <div class="content-page">
      <router-link to="/subRouter/page1">页面1(Vuex示例)</router-link>
      <router-link to="/subRouter/page2">页面2</router-link>
    </div>
    <hr/>
    <router-view></router-view>

  </div>
</template>
<style scoped>
  .content-page {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  a {
    text-decoration: none;
    background-color: #409eff;
    color: white;
    border-radius: 5px;
    padding: 5px;
  }
</style>
<script>
  export default {}
</script>
