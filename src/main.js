import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap
import App from "./App.vue";
import "bootstrap";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");