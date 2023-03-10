import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InitView from "@/views/InitView.vue";
import WorkoutRoutine from "@/views/WorkoutRoutine.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/init',
      name: 'init',
      component: InitView
    },
    {
      path:'/routine',
      name:'WorkoutRoutine',
      component: WorkoutRoutine
    }
  ]
})

export default router
