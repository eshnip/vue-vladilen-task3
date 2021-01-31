import { createRouter, createWebHistory } from 'vue-router'
import New from '@/views/New'
import Tasks from '@/views/Tasks'
import Task from "./views/Task";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/tasks/', alias: '/', component: Tasks, children: [
        {path: ':taskId?', component: Task, props: true}
      ]},
    {path: '/new', component: New}
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})