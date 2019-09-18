import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import userRouter from './user/router'
import DownExcel from '@/components/DownExcel'

Vue.use(Router)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    ...userRouter,
    { path: '/downExcel', component: DownExcel},
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
})
