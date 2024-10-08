import { createRouter, createWebHistory } from 'vue-router'
import PostView from '@/views/PostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'is-current',
  linkExactActiveClass: 'is-current',
  routes: [
    {
      path: '/',
      name: 'post',
      component: PostView
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthView.vue')
    }
  ]
})

export default router
