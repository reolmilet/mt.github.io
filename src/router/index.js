import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShoppingView from '../views/ShoppingView.vue'
import ClassifyView from '@/views/ClassifyView.vue'
import MyView from '@/views/myView.vue'
import stores from '@/stores'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home/shopping',
      name: 'shopping',
      component: ShoppingView,
      meta: { isAuth: true }
    },
    {
      path: '/home/my',
      name: 'my',
      component: MyView
    },
    {
      path: '/home/classify',
      name: 'classify',
      component: ClassifyView,
      meta: { keepAlive: true }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})
//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
  //如果路由需要跳转
  if (to.meta.isAuth) {
    if (stores.state.match == true) {
      next() //放行
    } else {
      alert('请先登录')
    }
  } else {
    // 否则，放行
    next()
  }
})
export default router
