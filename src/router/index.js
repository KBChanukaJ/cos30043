import { createRouter, createWebHistory } from 'vue-router'
import JobList from '@/components/JobList.vue'
import ApplicationForm from '@/components/ApplicationForm.vue'
import ToDoList from '@/components/ToDoList.vue'

const routes = [
  {
    path: '/',
    name: 'Jobs',
    component: JobList
  },
  {
    path: '/apply',
    name: 'Apply',
    component: ApplicationForm
  },
  {
    path: '/todo',
    name: 'ToDo',
    component: ToDoList
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router