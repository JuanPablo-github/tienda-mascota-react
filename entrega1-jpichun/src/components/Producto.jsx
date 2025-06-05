import { Link } from "react-router-dom"

function Producto({ nombre, descripcion, precio,id }) {
    return(
    <Link to={`/productos/${id}`} className='card'>
      <h3>{nombre}</h3>
      
      <h3>{precio}</h3>
    </Link>
  )
}

export default Producto