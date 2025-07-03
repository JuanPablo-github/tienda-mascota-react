import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebaseConfig"; // ✅ Asegúrate de que esta ruta sea correcta
import ItemList from "./ItemList";     // ✅ Importa correctamente el componente de cards

function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productosRef = collection(db, "productos");
        const snapshot = await getDocs(productosRef);
        const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductos(docs);
      } catch (err) {
        console.error("Error al cargar productos:", err);
      }
    };

    fetchData();
  }, []);

  return <ItemList items={productos} />;
}

export default ItemListContainer;
