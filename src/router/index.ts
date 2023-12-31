import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ToDoListDetailsView from "../views/ToDoListDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => {
        return import('../views/HomeView.vue')
      }
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: ToDoListDetailsView,
      props: true,
    },
  ],
});

export default router;
