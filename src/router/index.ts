import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TheLayout from '../components/TheLayout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "TheLayout",
    component: TheLayout,
    children: [
      {
        path: "/",
        redirect: "/tasks",
      },
      {
        path: "/tasks",
        name: "Tasks",
        component: () => import("../views/Tasks.vue"),
      },
      {
        path: "/kanban",
        name: "Kanban",
        component: () => import("../views/Kanban.vue"),
      },
      {
        path: "/activity",
        name: "Activity",
        component: () => import("../views/Activity.vue"),
      },
      {
        path: "/calendar",
        name: "Calendar",
        component: () => import("../views/Calendar.vue"),
      },
      {
        path: "/files",
        name: "Files",
        component: () => import("../views/Files.vue"),
      },
      {
        path: "/home",
        name: "Home",
        component: () => import("../components/Plug/Home.vue"),
      },
      {
        path: "/notification",
        name: "Norification",
        component: () => import("../components/Plug/Notification.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
