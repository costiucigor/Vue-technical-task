import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'
import MenuView from "@/views/MenuView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products/:products',
    name: 'products',
    component: MenuView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
