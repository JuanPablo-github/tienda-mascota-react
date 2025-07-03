import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "firebase/firestore";

// 🔐 Tu config de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCpsDxGlQDVEwDmTFIJHzgjDUzf0iHdWYw",
  authDomain: "tienda-mascotas-ff10d.firebaseapp.com",
  projectId: "tienda-mascotas-ff10d",
  storageBucket: "tienda-mascotas-ff10d.firebasestorage.app",
  messagingSenderId: "673393165271",
  appId: "1:673393165271:web:c453c5e76ca734b5e3c192"
};

// 🔌 Inicializar
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🧹 Limpiar duplicados
async function limpiarDuplicados() {
  const productosRef = collection(db, "productos");
  const snapshot = await getDocs(productosRef);

  const vistos = new Set();
  const duplicados = [];

  snapshot.forEach(docSnap => {
    const data = docSnap.data();
    const clave = `${data.nombre}-${data.precio}`; // Puedes afinar la clave aquí
    if (vistos.has(clave)) {
      duplicados.push(docSnap.id);
    } else {
      vistos.add(clave);
    }
  });

  for (let id of duplicados) {
    await deleteDoc(doc(db, "productos", id));
    console.log(`🗑️ Eliminado duplicado con ID: ${id}`);
  }

  console.log(`✅ Proceso completado. Se eliminaron ${duplicados.length} duplicados.`);
}

limpiarDuplicados().catch(console.error);
