import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/typewriter',
    meta: { title: 'Typewriter' },
    component: () => import('../pages/typewriter/index.vue')
  },
  {
    path: '/memory',
    meta: { title: 'Memory' },
    component: () => import('../pages/memory/index.vue')
  },
  {
    path: '/',
    redirect: '/typewriter'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router