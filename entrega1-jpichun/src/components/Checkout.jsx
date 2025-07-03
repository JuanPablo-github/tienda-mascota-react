import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import db from "../firebaseConfig"; // Ajusta la ruta si es diferente



function Checkout() {
  const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ordenId, setOrdenId] = useState(null);
  

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!nombre || !email || !telefono) {
    alert("Por favor completa todos los campos.");
    return;
  }

  const orden = {
    cliente: { nombre, email, telefono },
    items: Array.isArray(carrito) ? carrito.map(item => ({
         id: item.id,
         nombre: item.nombre,
         precio: item.precio,
         cantidad: item.cantidad
    })) : [],

    total: Array.isArray(carrito) ? carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0) : 0,
    fecha: Timestamp.fromDate(new Date())
  };

  try {
    const docRef = await addDoc(collection(db, "ordenes"), orden);
    setOrdenId(docRef.id);
    vaciarCarrito(); // Limpiar carrito tras compra
  } catch (error) {
    console.error("Error al guardar la orden:", error);
  }
};


  return (
    <div className="checkout-container">
      <h2>Finalizar Compra</h2>

      {ordenId ? (
        <div className="orden-confirmada">
          <h3>¡Gracias por tu compra!</h3>
          <p>Tu número de orden es: <strong>{ordenId}</strong></p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="formulario-checkout">
          <div>
            <label>Nombre:</label>
            <input value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          </div>
          <div>
            <label>Email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" />
          </div>
          <div>
            <label>Teléfono:</label>
            <input value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
          </div>
          <button type="submit">Confirmar Compra</button>
        </form>
      )}
    </div>
  );
}

export default Checkout;
