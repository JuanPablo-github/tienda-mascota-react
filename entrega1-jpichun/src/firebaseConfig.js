import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpsDxGlQDVEwDmTFIJHzgjDUzf0iHdWYw",
  authDomain: "tienda-mascotas-ff10d.firebaseapp.com",
  projectId: "tienda-mascotas-ff10d",
  storageBucket: "tienda-mascotas-ff10d.firebasestorage.app",
  messagingSenderId: "673393165271",
  appId: "1:673393165271:web:c453c5e76ca734b5e3c192"
};

// Evitar inicialización duplicada
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const db = getFirestore(app);

export default db;
