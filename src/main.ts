import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import vuetify from "./plugins/vuetify";
import "@/scss/style.scss";
import { createVuetify } from "vuetify";
import { PerfectScrollbarPlugin } from "vue3-perfect-scrollbar";

const app = createApp(App);

const vuetify = createVuetify();

createApp(App).use(vuetify).mount("#app");
