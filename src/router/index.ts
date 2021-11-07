import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Activity from '../views/Activity.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/tasks',
    name: 'tasks',
    
    component: () => import('../views/Tasks.vue')
  },
  {
    path: '/kanban',
    name: 'kanban',
    
    component: () => import('../views/Kanban.vue')
  },
  {
    path: '/activity',
    name: 'activity',
    component: Activity
  },
  {
    path: '/calendar',
    name: 'calendar',
    
    component: () => import('../views/Calendar.vue')
  },
  {
    path: '/files',
    name: 'files',
    
    component: () => import('../views/Files.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router