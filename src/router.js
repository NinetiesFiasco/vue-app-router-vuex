import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Store from './pages/Store.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/store',
    name: 'Store',
    component: Store
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router