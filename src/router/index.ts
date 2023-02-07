import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/layouts/default/Default.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/AboutView.vue')
        },
        {
          path: '/shop',
          name: 'shop',
          component: () => import('@/views/Shop/MainShop.vue')
        },
        // authentication
        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/Auth/LoginPage.vue')
        },
        {
          path: '/signup',
          name: 'signup',
          component: () => import('@/views/Auth/SignupPage.vue')
        },
        {
          path: '/setting',
          name: 'setting',
          component: () => import('@/views/Auth/SettingPage.vue')
        }
      ]
    },
  ]
})

export default router
