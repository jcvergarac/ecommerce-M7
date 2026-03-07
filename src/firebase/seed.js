// seed de poblado de BD desde colección de productos en data/autos.js ** EN DESUSO **

// import { db } from "./config";
// import { collection, addDoc } from "firebase/firestore";
// import productos from "../data/autos.js";

// export const cargarBaseDeDatos = async () => {
//   try {
//     const productosRef = collection(db, "productos");
    
//     for (const producto of productos) { 
//       await addDoc(productosRef, producto);
//     }
    
//     console.log("¡Colección poblada con éxito!");
//   } catch (error) {
//     console.error("Error al poblar la colección:", error);
//   }
// };