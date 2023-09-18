import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import RecipePage from "@/views/RecipePage.vue";
import ArtworkPage from "@/views/ArtworkPage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/r&r",
    name: "RecipePage",
    component: RecipePage,
  },
  {
    path: "/artworks",
    name: "ArtworkPage",
    component: ArtworkPage,
  },
  {
    path: "/travels",
    name: "RecipePage",
    component: RecipePage,
  },
  {
    path: "/recipes",
    name: "RecipePage",
    component: RecipePage,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;