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

const router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置,前提是这个界面要能滚动，否则没有反应
    return {
      x:0,y:20
    }
  },
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/richText',
      name: 'RichTextPage',
      component: RichTextPage,
      beforeEnter(to, from, next){
        console.info('enter rich text page');
        next();
      }
    },
    {
      path: '/table',
      name: 'DataTable',
      component: DataTable,
      meta: {subject: 'java'}
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
});
//全局守卫导航,next用来放行
router.beforeEach((to, from, next) => {
  console.info('global beforeEach');
  //一个路由匹配到的所有路由记录会暴露为 $route 对象（还有在导航守卫中的路由对象）的 $route.matched 数组。
  to.matched.some(record => {
    if(record.meta.subject){
      console.info('meta info :'+record.meta.subject)
    }
  })
  next()
});
//全局后置钩子，不会改变导航的状态
router.afterEach((to, from) => {
  console.info('global afterEach');
})
export default router;
