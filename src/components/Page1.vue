<!--
    @CreationDate:2018/1/31
    @Author:Joker
    @Usage:page1
-->
<template>
  <div class="page1">
    <h2>
      Vuex示例
    </h2>
    <div class="show-number">
      {{count}};{{scale}};{{name}};{{upperName}}
    </div>
    <div class="plus-button">
      <mt-button type="primary" @click="plus">
        PLUS
      </mt-button>
    </div>

  </div>
</template>
<style scoped>
  .show-number {
    height: 40px;
    width: 100%;
    background-color: #cccccc;
    margin-top: 40px;
    text-align: center;
    line-height: 40px;
  }

  .plus-button {
    text-align: center;
    margin-top: 10px;
  }
</style>
<script>

  import {mapState} from 'vuex';

  export default {
    data(){
      return {}
    },
    computed: {
      ...mapState(['count', 'scale', 'name']),
      upperName: function () {
        return this.$store.getters.upperName
      }
    },
    methods: {
      plus(){
        this.$store.dispatch('increment')
      }
    }
  }
</script>
