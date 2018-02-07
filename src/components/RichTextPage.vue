<!--
    @CreationDate:2018/1/22
    @Author:Joker
    @Usage:测试富文本
-->
<template>
  <div class="content">
    <vue-html5-editor :content="content" :height="height" :style="{width:'100%'}"
                      @change="updateData"></vue-html5-editor>

  </div>
</template>
<style scoped>
</style>
<script>
  export default {
    data(){
      return {content: '请输入文章内容', width: 0, height: 200}
    },
    methods: {
      updateData(e = ''){

        let c1 = e.replace(/<img width="100%"/g, '<img');

        let c2 = c1.replace(/<img/g, '<img width="100%"');


        this.content = c2;
      }
    },
    mounted(){
      let w = document.documentElement.clientWidth;
      let h = document.documentElement.clientHeight;
      this.width = (w - 10) + 'px';
      this.height = h - 110;
      console.info(`宽=${w},高=${h}`);
    }
  }
</script>
