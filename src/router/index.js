import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RichTextPage from '@/components/RichTextPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/richText',
      name: 'RichTextPage',
      component: RichTextPage
    }
  ]
})
