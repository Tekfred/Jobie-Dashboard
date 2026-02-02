import { createRouter, createWebHistory } from "vue-router";


const MainLayout = () => import('@/features/layouts/MainLayout.vue')
const DashboardView = () => import('@/features/views/DashboardView.vue')
const JobListView = () => import('@/features/views/JobListView.vue')

const routes = [
    {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '', // This is the default page (localhost:5173/)
        name: 'dashboard',
        component: DashboardView
      },
      {
        path: 'jobs', // (localhost:5173/jobs)
        name: 'job-search',
        component:JobListView
      }
    ]
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router