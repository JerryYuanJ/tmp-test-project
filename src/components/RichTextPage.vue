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

    },
    beforeRouteEnter (to, from, next) {
        next()
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
    },
    beforeRouteUpdate (to, from, next) {
        next()
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
    },
    beforeRouteLeave (to, from, next) {
        next()
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
    }
  }
</script>
