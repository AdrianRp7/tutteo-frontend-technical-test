import { createRouter, createWebHistory } from 'vue-router'
import PlayerView from '../modules/player/views/PlayerView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PlayerView
    },
  ]
})

export default router
