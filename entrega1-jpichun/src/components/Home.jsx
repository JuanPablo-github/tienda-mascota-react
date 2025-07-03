import productosMascotas from "./productosMascotas";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  // seleccionamos 4 productos para mostrar
  const destacados = productosMascotas.slice(0, 4);

  return (
    <div className="home-container">
      <div className="banner">
        <img src="https://via.placeholder.com/1200x300?text=Bienvenido+a+la+Tienda+de+Mascotas" alt="Banner Tienda" />
      </div>

      <section className="destacados">
        <h2>Productos Destacados</h2>
        <div className="destacados-grid">
          {destacados.map(prod => (
            <div key={prod.id} className="producto-card">
              <h3>{prod.nombre}</h3>
              <img src={prod.imagen} alt={prod.nombre} />
              <p>${prod.precio}</p>
              <Link to={`/producto/${prod.id}`}>
                <button>Ver Detalles</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="destacados">
        <h2>Nuevos Productos</h2>
        <div className="destacados-grid">
          {destacados.map(prod => (
            <div key={prod.id} className="producto-card">
              <h3>{prod.nombre}</h3>
              <img src={prod.imagen} alt={prod.nombre} />
              <p>${prod.precio}</p>
              <Link to={`/producto/${prod.id}`}>
                <button>Ver Detalles</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
