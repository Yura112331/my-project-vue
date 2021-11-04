import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Activity.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/activity',
    name: 'activity',
    component: Home
  },
  {
    path: '/tasks',
    name: 'tasks',
    
    component: () => import('../views/Tasks.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router