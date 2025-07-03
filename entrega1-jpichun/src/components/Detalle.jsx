import { useParams } from "react-router-dom";
import productosMascotas from "./productosMascotas";
import "./Detalle.css";
import ItemCount from "./ItemCount.jsx";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";


function Detalle() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const producto = productosMascotas.find((prod) => prod.id === parseInt(id));

  if (!producto) return <h2>Producto no encontrado</h2>;

  return (
    <div className="detalle-container">
      <div className="detalle-card">
        <img src={producto.imagen} alt={producto.nombre} className="detalle-imagen" />

        <div className="detalle-info">
          <h2>{producto.nombre}</h2>
          <p className="detalle-id">ID: #{producto.id}</p>
          <p>{producto.descripcion}</p>
          <h3>${producto.precio}</h3>

          <div className="detalle-controles">
            <ItemCount
                  stock={10}
                  initial={1}
                  onAdd={(cantidad) => {
                    addToCart(producto, cantidad);

                    Swal.fire({
                      title: "¡Producto agregado!",
                      text: `${cantidad} unidad(es) de "${producto.nombre}" se agregaron al carrito.`,
                      icon: "success",
                      timer: 1800,
                      showConfirmButton: false
                    });
                  }}
                />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detalle;

