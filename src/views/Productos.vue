<template>
  <div class="grid">
    <AutoCard
      v-for="a in autos"
      :key="a.id"
      :auto="a"
    />
  </div>
</template>

<script>
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import AutoCard from "../components/AutoCard.vue";

export default {
  components: { AutoCard },
  data() {
    return {
      autos: []
    };
  },
  // Nuevo estado para controlar la carga de los datos de los autos
async mounted() {
  try {
    const querySnapshot = await getDocs(collection(db, "productos"));
    console.log("Documentos encontrados:", querySnapshot.size);
    
    this.autos = querySnapshot.docs.map(doc => {
      const data = doc.data();
      console.log("Auto detectado:", data.nombre);
      return {
        id: doc.id,
        ...data
      };
    });
  } catch (error) {
    console.error("Error en el mounted:", error);
  } finally {
    this.cargando = false;
  }
}
};
</script>

<style>
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 20px;
}
</style>