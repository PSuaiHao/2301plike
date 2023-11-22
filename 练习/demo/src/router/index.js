import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/hpage',  // 重定向:重新指向其它path,会改变网址
    name: 'home',
    component: HomeView,
    children:[     
      {
        path: '/product',
        name: 'product',   
        component: () => import('../views/product.vue')
      },
      {
        path: '/hpage',
        name: 'hpage',   
        component: () => import('../views/hpage.vue')
      },
      {
        path: '/category',
        name: 'category',   
        component: () => import('../views/category.vue')
      },{
        path: '/order',
        name: 'order',   
        component: () => import('../views/order.vue')
      },
      {
        path: '/user',
        name: 'user',   
        component: () => import('../views/user.vue')
      },
      {
        path: '/detail',
        name: 'detail',   
        component: () => import('../views/detail.vue')
      }
      
    ]
  },
  {
    path: '/about',
    name: 'about',   
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',   
    component: () => import('../views/login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
