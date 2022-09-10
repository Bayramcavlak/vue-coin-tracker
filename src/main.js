import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap
import App from "./App.vue";
import "bootstrap";
import LandingPage from "./components/Landing.vue";
import Team from "./components/Teams.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/landing",
      component: LandingPage,
    },
    {
      path: "/team",
      name: "team",
      component: Team,
    },
  ],
});
const app = createApp(App);
app.use(router);
app.mount("#app");
