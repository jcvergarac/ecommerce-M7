<template>
  <div class="carrito">

    <h2>Carrito de compras</h2>

    <ul>
      <li v-for="(item,i) in carrito.items" :key="i">

        {{ item.nombre }} — ${{ item.precio }}

        <button @click="quitar(i)">
          Quitar
        </button>

      </li>
    </ul>

    <h3>Total: ${{ carrito.total() }}</h3>

    <button @click="pagar">
      Pagar
    </button>

  </div>
</template>

<script>
import { carrito } from "../store/carrito";

export default {
  setup() {
    function quitar(i) {
      carrito.quitar(i);
    }

    function pagar() {
      if (!carrito.items.length)
        return alert("Carrito vacío");

      alert("Pago realizado 🎉");
      carrito.vaciar();
    }

    return { carrito, quitar, pagar };
  }
};
</script>

<style>
.carrito {
  padding: 20px;
}
button {
  margin-left: 10px;
}
</style>
