import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/api',
    name: 'api',
    component: () => import(/* webpackChunkName: "api" */ '../views/ApiView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
