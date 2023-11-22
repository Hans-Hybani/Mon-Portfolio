import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '../views/Acceuil.vue'
import NotFound from '../components/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Acceuil
    },
    {
      path:'/Me',
      name: 'Moi',
      component: Acceuil.Me

    },
    {
      path:'/Portfolio',
      name: 'Portfolio',
      component: Acceuil.Portfolio

    },
    {
      path:'/Contact',
      name: 'Contact',
      component: Acceuil.Contact

    },
    {
      path:'/:pathMatch(.*)*',
      name:'NotFound',
      component:NotFound,
    }
  ]
})

export default router
