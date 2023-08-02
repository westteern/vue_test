import { createRouter, createWebHistory } from "vue-router";
import PageFoo from "../src/pages/PageFoo.vue";
import PageBar from "../src/pages/PageBar.vue";
import HomePage from "../src/pages/HomePage.vue";
import ApartmentPage from "../src/pages/ApartmentPage.vue";
import ErrorPage from "../src/pages/ErrorPage.vue";

const routes = [
  { path: "/foo", component: PageFoo },
  { path: "/bar", component: PageBar },
  {
    path: "/",
    component: HomePage,
    name: "homepage",
  },
  {
    path: "/apartment/:id",
    component: ApartmentPage,
    name: "apartment",
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
    name: "error-page",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
