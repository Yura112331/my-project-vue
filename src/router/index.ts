import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Tasks from '../views/Tasks.vue'
import Kanban from '../views/Kanban.vue'
import Activity from '../views/Activity.vue'
import Calendar from '../views/Calendar.vue'
import Files from '../views/Files.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks,
  },
  {
    path: '/kanban',
    name: 'Kanban',
    component: Kanban,
  },
  {
    path: '/activity',
    name: 'Activity',
    component: Activity,
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
  },
  {
    path: '/files',
    name: 'Files',
    component: Files,
  },
  {
    path: '/',
    redirect: "/tasks",
  },
  /* { 
    path: '/:pathMatch(.*)*', 
    component: Activity  
  }, */
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router