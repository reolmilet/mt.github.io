import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShoppingView from '../views/ShoppingView.vue'
import ClassifyView from '@/views/ClassifyView.vue'
import MyView from '@/views/myView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home/shopping',
      name: 'shopping',
      component: ShoppingView
    },
    {
      path: '/home/my',
      name: 'my',
      component: MyView
    },
    {
      path: '/home/classify',
      name: 'classify',
      component: ClassifyView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})
export default router
