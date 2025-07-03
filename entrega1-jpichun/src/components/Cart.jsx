import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


function Cart() {
  const { cart, removeItem, clearCart, totalUnidades, totalPrecio } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2>🛒 El carrito está vacío</h2>;
  }

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((prod) => (
          <li key={prod.id} className="cart-item">
            <p><strong>{prod.nombre}</strong></p>
            <p>Cantidad: {prod.cantidad}</p>
            <p>Precio unitario: ${prod.precio}</p>
            <p>Subtotal: ${prod.precio * prod.cantidad}</p>
            <button onClick={() => {
              removeItem(prod.id);
              Swal.fire({
                title: "Producto eliminado",
                text: `"${prod.nombre}" fue quitado del carrito.`,
                icon: "info",
                timer: 1500,
                showConfirmButton: false
              });
            }}>Eliminar</button>

          </li>
        ))}
      </ul>

      <h3>Total unidades: {totalUnidades()}</h3>
      <h3>Total a pagar: ${totalPrecio()}</h3>

      <Link to="/checkout">
      <button className="btn-finalizar">Finalizar Compra</button>
      </Link>


      <button onClick={() => {
        Swal.fire({
          title: "¿Estás seguro?",
          text: "Esto eliminará todos los productos del carrito.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, vaciar",
          cancelButtonText: "Cancelar"
        }).then((result) => {
          if (result.isConfirmed) {
            clearCart();
            Swal.fire({
              title: "Carrito vaciado",
              icon: "success",
              timer: 1500,
              showConfirmButton: false
            });
          }
        });
        }}>Vaciar carrito</button>
    </div>
  );
}

export default Cart;
