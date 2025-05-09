import logo from '../img/logo-pets.png'
import '../styles/styleNavBar.css';
import CartWidget from './CartWidget';


function NavBar (){
  
    return (
     
        <nav className="navBar">
  <div className="nav-wrapper">
    
    <div className="nav-left">
      <h1>Tienda de mascotas</h1>
      <img src={logo} alt="Logo" className="logoPet" />
    </div>

    <ul className="navbar-links">
      <li><a href="#">HOME</a></li>
      <li><a href="#">Productos</a></li>
      <li><a href="#">Contacto</a></li>
      <li><a href="#">Sobre nosotros</a></li>
    </ul>

    <div className="nav-right">
      <CartWidget />
    </div>

  </div>
</nav>

      

    )
  }


export default NavBar
