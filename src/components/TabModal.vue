<!--
    @CreationDate:2018/2/2
    @Author:Joker
    @Usage:测试popup不能遮住mt-tabbar的问题
-->
<template>
  <div class="tab-modal">


    <div class="footer-tab">

      <div class="tab-item" :style="{backgroundColor:selectTab==='data'?'#eaeaea':'white'}" @click="select('data')">
        <img src="../assets/images/data.png" width="30" height="30"/>
        数据
      </div>
      <div class="tab-item" :style="{backgroundColor:selectTab==='text'?'#eaeaea':'white'}" @click="select('text')">
        <img src="../assets/images/text.png" width="30" height="30"/>
        文本
      </div>

      <div class="tab-item" :style="{backgroundColor:selectTab==='report'?'#eaeaea':'white'}" @click="select('report')">
        <img src="../assets/images/report.png" width="30" height="30"/>
        报告
      </div>
      <div class="tab-item" :style="{backgroundColor:selectTab==='my'?'#eaeaea':'white'}" @click="select('my')">
        <img src="../assets/images/my.png" width="30" height="30"/>
        我的
      </div>

    </div>

  </div>
</template>
<style>
  .footer-tab {
    height: 60px;
    width: 100%;
    background-color: #c0ccda;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tab-item {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }
</style>
<script>

  export default {
    data(){
      return {
        selectTab: 'text',
        mData:[{text:'体育',value:'sports'},{text:'经济',value:'economy'},{text:'生活',value:'life'}
                ,{text:'娱乐',value:'entertainment'},{text:'军事',value:'military'}]
      }
    },
    methods: {
      select(item){
        this.selectTab = item
      }
    }
  }
</script>
