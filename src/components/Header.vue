<template>
  <header class="header">
    <h1>Tienda Autos 1:32</h1>

    <nav>
      <router-link to="/">Productos</router-link>
      |
      <router-link to="/carrito">Carrito</router-link>
    </nav>
  </header>
</template>

<style>
.header {
  background: #111;
  color: white;
  text-align: center;
  padding: 20px;
}
nav a {
  color: white;
  margin: 0 10px;
}
</style>
