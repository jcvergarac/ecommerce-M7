// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFDxuXMvEIhvOEl-IkG3HUZmzp786wq9I",
  authDomain: "ecommerce-m7.firebaseapp.com",
  projectId: "ecommerce-m7",
  storageBucket: "ecommerce-m7.firebasestorage.app",
  messagingSenderId: "803943713180",
  appId: "1:803943713180:web:1ec1a3adb12034d103a059",
  measurementId: "G-8P9VNRYKK6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);