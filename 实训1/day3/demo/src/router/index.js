import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    
  },
  {
    path: '/akali',
    name: 'akali',
    component: () => import('../views/akali.vue'),
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      console.log(to,'to');
      console.log(from,'from');
      console.log(next,'next');
       if(from.path=='/jie'){
        next('/about')
      }else{
        next()
      }
    }
  },
  {
    path: '/jie',
    name: 'jie',
    component: () => import('../views/jie.vue')
  }
]

const router = new VueRouter({
  routes
})
// 全局路由守卫 在初始化时执行 每次路由切换前执行
router.beforeEach((to,from,next)=>{
       console.log(to,'brforeto');
       console.log(from,'brforefrom');
       console.log(next,'brforenext');
       next()
})
// 全局后置守卫 初始化时执行 每次路由切换后执行
// 后置路由守卫没有next()因此不用写
router.afterEach((to,from)=>{
  console.log(to,'afterto');
  console.log(from,'afterfrom');
})

export default router
