import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RichTextPage from '@/components/RichTextPage'
import DataTable from '@/components/DataTable'

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
    },
    {
      path: '/table',
      name: 'DataTable',
      component: DataTable
    }
  ]
})
