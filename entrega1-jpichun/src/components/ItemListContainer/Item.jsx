import { Link } from "react-router-dom";

function Item({ nombre, descripcion, precio, id }) {
  return (
    <div className="card">
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>
      <Link to={`/producto/${id}`}>
        <button>Ver Detalles</button>
      </Link>
    </div>
  );
}

export default Item;