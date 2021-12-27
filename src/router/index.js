import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import Administrador from "../views/Administrador.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/Portada.vue"),
    name: "portada"
  },
  {
    path: "/sobremi",
    component: () => import("../views/SobreMi.vue"),
    name: "sobremi", 
    alias: ["/acerca"]
  },
  {
    path: "/contacto",
    component: () => import("../views/Contacto.vue"),
    alias: ["/contactame"]
  },
  {
    path: "/post",
    component: () => import("../views/Post.vue"),
    children: [
      {
        path: ":articulo",
        component: () => import("../views/Articulo.vue")
      }
    ]
  },
  {
    path: "/administrador/:nivel",
    component: Administrador
  },
  {
    path: "/home",
    redirect: "/"
  },
  {
    path: "/inicio",
    redirect: "/"
  },
  {
    path: "/portada",
    redirect: "/"
  },
  {
    path: "*",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
