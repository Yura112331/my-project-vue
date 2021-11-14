import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Tasks from '../views/Tasks.vue'
import Kanban from '../views/Kanban.vue'
import Activity from '../views/Activity.vue'
import Calendar from '../views/Calendar.vue'
import Files from '../views/Files.vue'
import Layout from '../components/Layout.vue'
import NotFound from '../components/NotFound.vue'
import Home from '../components/Plug/Home.vue'
import Notification from '../components/Plug/Notification.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
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
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/notification',
      name: 'Norification',
      component: Notification,
    },
    {
      path: '/',
      redirect: "/tasks",
    },
    ]
  },
  
  {
    path: "/:pathMatch(.*)*", 
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router