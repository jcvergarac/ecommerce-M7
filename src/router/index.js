import { createRouter, createWebHistory } from "vue-router";

import Productos from "../views/Productos.vue";
import Carrito from "../views/Carrito.vue";

const routes = [
  { path: "/", component: Productos },
  { path: "/carrito", component: Carrito }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
