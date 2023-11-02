import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/login.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import( '../views/detail.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import( '../views/shop.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import( '../views/main.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( '../views/register.vue')
  },
  {
    path: '/code',
    name: 'code',
    component: () => import( '../views/code.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
