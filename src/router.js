import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home/home";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      meta: {
        auth: false
      },
      component: () => import("@/views/about/about")
    }
  ]
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
