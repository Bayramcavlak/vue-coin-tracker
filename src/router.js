import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "./components/Landing.vue";
import Team from "./components/Teams.vue";
import Food from "./components/FoodMenu.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/landing",
      component: LandingPage,
    },
    {
      path: "/menu",
      component: Food,
    },
    {
      path: "/team",
      name: "team",
      component: Team,
    },
  ],
});
export default router;
