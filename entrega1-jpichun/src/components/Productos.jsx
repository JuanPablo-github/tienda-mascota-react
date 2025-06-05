import productosGastronomicos from './productosPrueba';
import Producto from './Producto';
import productosMascotas from './productosMascotas';

function Productos() {
  return (
    <div id="container">
      {productosMascotas.map(prod=>(
        <Producto key={prod.id}{...prod}/>
      ) )}
    </div>
  )
}

export default Productos