import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/polityka-prywatnosci',
      name: 'privacy-policy',
      component: PrivacyPolicyView,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],

  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.documentElement.className = ''

  if (to.name) {
    document.documentElement.classList.add(`page-${to.name}`)
  }
})

export default router
