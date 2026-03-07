import { reactive } from "vue";

export const carrito = reactive({
  items: JSON.parse(localStorage.getItem("carrito")) || [],

  guardar() {
    localStorage.setItem("carrito", JSON.stringify(this.items));
  },

  agregar(auto) {
    this.items.push(auto);
    this.guardar();
  },

  quitar(index) {
    this.items.splice(index, 1);
    this.guardar();
  },

  vaciar() {
    this.items = [];
    this.guardar();
  },

  total() {
    return this.items.reduce((t, a) => t + a.precio, 0);
  }
});
