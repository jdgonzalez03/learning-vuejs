import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/404NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/404', component: NotFound },
    { path: '/:catchAll(.*)', redirect: '/404' },
    {
      path: '/',
      name: 'home',
      alias: '/home',
      component: HomeView,
      meta: {
        requiresAuth: false
      }
    },
    // ,{
    //   path: '/home',
    //   redirect: {name: 'home'}
    // },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/session',
      component: () => import('../views/SessionView.vue'),
      children: [
        {
          path: '',
          components: {
            default: () => import('../views/LoginView.vue'),
            register: () => import('../views/RegisterView.vue')
          }
        }
      ]
    },
    {
      path: '/chats',
      name: 'chats',
      component: () => import('../views/ChatsView.vue'),
      meta: {
        requiresAuth: true
      },
      children: [
        { 
          path: ':chatId(\\d+)',
          component: () => import('../views/ChatView.vue'),
          props: true
        }
      ]
    }
  ]
})

router.beforeEach((to, from) => {
  console.log(to, from)

  if (to.meta?.requiresAuth) {
    console.log(to.path, 'requires auth')
    return '/session'
  }

  // if (to.path === '/') return { name: 'about' }
  // return true
})

export default router
