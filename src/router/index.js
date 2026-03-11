import { createRouter, createWebHistory } from "vue-router";


const MainLayout = () => import('@/Features/layout/MainLayout.vue')
const DashboardView = () => import('@/Features/dashboard/DashboardView.vue')
const JobListView = () => import('@/Features/jobs/JobListView.vue')
const ProfileView = () => import('@/Features/profile/ProfileView.vue')
const ApplicationsView = () => import('@/features/applications/ApplicationsView.vue')
const MessageView = () => import('@/features/Messages/MessageView.vue')

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
        path: 'search', // (localhost:5173/jobs search)
        name: 'job-search',
        component:JobListView
      }, 
      {
        path: 'applications', // (localhost:5173/applications)
        name: 'applications',
        component:ApplicationsView
      },
      {
        path:'profile',
        name: 'profile',
        component: ProfileView
      },
      {
        path:'messages',
        name: 'messages',
        component: MessageView
      } 
    ]
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router