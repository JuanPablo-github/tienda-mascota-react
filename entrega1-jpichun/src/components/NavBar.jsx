import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../img/logo-pets.png'; // Ajusta si tu logo está en otro lado
import '../styles/styleNavBar.css'; // Asegúrate de que la ruta sea correcta

function NavBar() {
  return (
    <nav className="navBar">
      <div className="nav-wrapper">
  <div className="nav-left">
    <h1>Tienda de mascotas</h1>
    <img src={logo} alt="logo" className="logoPet" />
  </div>

  <div className="nav-center">
    <ul className="navbar-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Productos">Productos</Link></li>
      <li><Link to="/Nosotros">Nosotros</Link></li>
    </ul>
  </div>

  <div className="nav-right">
    <CartWidget />
  </div>
</div>

    </nav>
  );
}
export default NavBar
