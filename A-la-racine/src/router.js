import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/consultations',
    name: 'consultations',
    component: () => import('./views/Consultations.vue')
  },
  {
    path: '/professionnels',
    name: 'professionnels',
    component: () => import('./views/Professionnels.vue')
  },
  {
    path: '/ateliers',
    name: 'ateliers',
    component: () => import('./views/Ateliers.vue')
  },
  {
    path: '/tarifs',
    name: 'tarifs',
    component: () => import('./views/Tarifs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
