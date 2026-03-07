<template>
  <div class="card">
    <img :src="auto.imagen" class="producto-img" />
    <h3>{{ auto.nombre }}</h3>
    <p>{{ auto.descripcion }}</p>
    <b>${{ auto.precio }}</b>
    <button @click="agregar">Añadir al carrito</button>
  </div>
</template>

<script>
import { carrito } from "../store/carrito";

export default {
  props: ["auto"],

  methods: {
    agregar() {
      carrito.agregar(this.auto);
      alert("Añadido al carrito");
    }
  }
};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 10px;
  width: 250px;
}

/* seteo del tamaño de la imagen */
.producto-img {
  width: 100%;
  height: 200px;
  object-fit: contain;
  background: #f8f8f8;
}
</style>
