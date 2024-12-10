// createRouter:创建router实例对象
// createWebHistory:创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Draft from '@/views/Draft/index.vue'
import History from '@/views/History/index.vue'
import Person from '@/views/Person/index.vue'
import Sum from '@/views/Home/sum.vue'
import Choose from '@/views/Home/choose.vue'
import Cut from '@/views/Home/cut.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'draft',
          component: Draft
        },
        {
          path: 'history',
          component: History
        },
        {
          path: 'person',
          component: Person
        },
        {
          path: 'sum',
          component: Sum
        },
        {
          path: 'choose',
          component: Choose
        },
        {
          path: 'cut',
          component: Cut
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ],
  // 路由滚动行为定制
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
