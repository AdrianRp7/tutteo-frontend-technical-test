import { createRouter, createWebHistory } from 'vue-router'
import PlayerView from '../modules/player/views/PlayerView.vue';
import IndexView from '@/modules/common/view/IndexView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexView
    },
    {
      path: '/player-view',
      name: 'player',
      component: PlayerView,
      props: router => {
        console.log(typeof router.query.audio)
        if(typeof router.query.audio === 'string')
          return JSON.parse(router.query.audio)
      }
    },
  ]
})

export default router
