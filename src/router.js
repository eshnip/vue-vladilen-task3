import { createRouter, createWebHistory } from 'vue-router'
import New from '@/views/New'
import Tasks from '@/views/Tasks'
import Task from "./views/Task";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/tasks/', alias: '/', component: Tasks},
    {path: '/task/:taskId?', component: Task},
    {path: '/new', component: New},
    {path: '/:notFound(.*)', redirect: '/tasks'}
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})