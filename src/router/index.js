import { createRouter, createWebHistory } from "vue-router";

const LoginView = () => import('@/Features/Authentication/loginpage.vue')

const MainLayout = () => import('@/Features/layout/MainLayout.vue')
const DashboardView = () => import('@/Features/dashboard/DashboardView.vue')
const JobListView = () => import('@/Features/jobs/JobListView.vue')
const ProfileView = () => import('@/Features/profile/ProfileView.vue')
const ApplicationsView = () => import('@/Features/applications/ApplicationsView.vue')
const StatisticsView = () => import('@/Features/Statistics/StatisticsView.vue')
const NewsView = () => import('@/Features/News/NewsView.vue')

const routes = [
  // 🔐 Login Page
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  // 🔁 Redirect root → login
  {
    path: '/',
    redirect: '/login'
  },

  // 🧱 Protected App
  {
    path: '/app',
    component: MainLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: DashboardView
      },
      {
        path: 'search',
        name: 'job-search',
        component: JobListView
      }, 
      {
        path: 'applications',
        name: 'applications',
        component: ApplicationsView
      },
      {
        path:'profile',
        name: 'profile',
        component: ProfileView
      },
      {
        path:'statistics',
        name: 'statistics',
        component: StatisticsView
      },
      {
        path: 'news',
        name: 'news',
        component: NewsView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

/* 🛡 Route Guard */
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('auth') === 'true'

  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login')
  } else if (to.path === '/login' && isLoggedIn) {
    next('/app/dashboard')
  } else {
    next()
  }
})

export default router