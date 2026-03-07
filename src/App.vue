<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script setup>
// import { onMounted } from 'vue';
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
// import { cargarBaseDeDatos } from './firebase/seed';

// onMounted(() => {
//   console.log("Intentando poblar base de datos...");
//   // cargarBaseDeDatos();   //Poblado de BD
// });
</script>