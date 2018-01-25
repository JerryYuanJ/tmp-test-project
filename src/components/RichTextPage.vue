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
  .page-list {
    display: flex;
    flex-direction: column;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .preview {
    position: fixed;
    bottom: 0;
    background-color: #26a2ff;
    color: white;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    font-weight: bold;
    width: 100%;
    text-align: center
  }

</style>
<script>
  export default {
    data(){
      return {content: '请输入文章内容', width: 0, height: 200, imgCount: 0}
    },
    methods: {
      updateData(e = ''){
        /*let re = new RegExp("<img src=", "g");
         let arr = e.match(re);
         if (arr !== null) {
         this.imgCount = arr.length
         } else {
         this.imgCount = 0
         }
         console.info(this.imgCount);
         */
        //console.info(e);
        let c1 = e.replace(/<img width="100%"/g, '<img');
        //console.info(c1)
        let c2 = c1.replace(/<img/g, '<img width="100%"');
        //console.info(c2)
        //let c = e.replace('<img', '<img width="100%"');

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
