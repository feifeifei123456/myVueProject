// 路由配置文件
import { createRouter, createWebHistory } from 'vue-router'
const login = () => import('@/views/login/login.vue') //登录
const routes = [{
    path: '/',
    name: 'login',
    component: login
  },

  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index/index.vue') //首页
  }
]
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes
})

export default router