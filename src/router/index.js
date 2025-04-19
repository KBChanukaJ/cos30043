import { createRouter, createWebHistory } from 'vue-router'
import JobList from '@/components/JobList.vue'  // Add this import
import JobOverview from '@/components/JobOverview.vue'
import JobDetail from '@/components/JobDetail.vue'
import ApplicationForm from '@/components/ApplicationForm.vue'
import ToDoList from '@/components/ToDoList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: JobOverview,
      sidebar: JobList  // Now this is defined
    }
  },
  {
    path: '/job/:id',
    name: 'JobDetail',
    components: {
      default: JobDetail,
      sidebar: JobList  // Now this is defined
    },
    props: { default: true }
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