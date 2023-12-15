import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
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
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/father',
    name: 'father',
    component: () => import('../views/father.vue')
  },
  {
    path: '/grandpa',
    name: 'grandpa',
    component: () => import('../views/grandpa.vue')
  },
  {
    path: '/tabsqh',
    name: 'tabsqh',
    component: () => import('../views/tabsqh.vue')
  },
  {
    path: '/gouzao',
    name: 'gouzao',
    component: () => import('../views/gouzao.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
