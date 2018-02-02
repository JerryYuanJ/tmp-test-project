<!--
    @CreationDate:2018/1/31
    @Author:Joker
    @Usage:嵌套子路由测试
-->
<template>
    <div class="sub-router">

      <router-link to="/subRouter/page1">Page1</router-link>
      <router-link to="/subRouter/page2">Page2</router-link>

      <router-view></router-view>

    </div>
</template>
<style>
</style>
<script>
    export default {}
</script>
