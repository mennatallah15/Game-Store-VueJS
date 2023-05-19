import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/pages/Home.vue";
import ProductDetails from "./components/pages/ProductDetails.vue";
// import Error from "./components/pages/Error.vue";
import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

const routes = [
  {
    path: "/",
    component: Home,
    alias: "/games",
  },
  {
    path: "/games/:id",
    component: ProductDetails,
  },
  //   { path: "/:Error(.*)*", component: Error, meta: { hideNavbar: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
