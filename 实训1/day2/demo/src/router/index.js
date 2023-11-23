import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

// 路由懒加载：使用异步加载方式，当我们点击到当前路由的时候，才会进行页面加载，节约性能，提高效率
// 除了公共的路由，比如:登录，404等页面，其他基本使用路由懒加载
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: '/general',
        name: 'general',
        component: () => import('../views/general.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    children:[
      {
        path: '/akali',
        name: 'akali',
        component: () => import('../components/akali.vue')
      },
      {
        path: '/shopssss',
        name: 'shopssss',
        component: () => import('../views/shopssss.vue')
      }
    ]
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
