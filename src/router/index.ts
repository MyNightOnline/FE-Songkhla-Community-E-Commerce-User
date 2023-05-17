import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

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
          path: '/product/:id',
          name: 'product',
          component: () => import('@/views/ProductView.vue')
        },
        {
          path: '/shop',
          name: 'shop',
          component: () => import('@/views/PageNotFound.vue')
        },
        {
          path: '/shop/:id',
          name: 'shopId',
          component: () => import('@/views/Shop/MainShop.vue')
        },
        {
          path: '/cart',
          name: 'cart',
          component: () => import('@/views/Shop/Cart.vue')
        },
        {
          path: '/cart/order-details',
          name: 'order-details',
          component: () => import('@/views/Shop/OrderDetail.vue')
        },
        {
          path: '/cart/order-products',
          name: 'order-products',
          component: () => import('@/views/Shop/OrderProduct.vue')
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

router.beforeEach(async (to) => {

  const publicPages = ['/login', '/signup', '/']
  const authRequired = !publicPages.includes(to.path)
  const auth = useAuthStore()
  const data = JSON.parse(localStorage.getItem('user')!)
  if (data) auth.full_name = data.data.full_name

  if (authRequired && !auth.full_name) {
    return '/login'
  }
})

export default router
