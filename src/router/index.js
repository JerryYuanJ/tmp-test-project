import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RichTextPage from '@/components/RichTextPage'
import DataTable from '@/components/DataTable'
import SubRouter from '@/components/SubRouter'
import TabModal from '@/components/TabModal'

import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'

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
    },
    {
      path: '/subRouter',
      name: 'SubRouter',
      component: SubRouter,
      children: [
        {
          path: 'page1',
          component: Page1
        },
        {
          path: 'page2',
          component: Page2
        }
      ]
    },
    {
      path: '/tabModal',
      name: 'TabModal',
      component: TabModal
    }
  ]
})
