import { use } from "react";
import productosGastronomicos from "./productosPrueba";

import { useParams } from "react-router-dom";

function Detalle() {

    const {id} = useParams();

    console.log(id);

    const producto = productosGastronomicos.find(prod => prod.id === parseInt(id));

    if (!producto) {
        return <h2>Producto no encontrado</h2>;
    }



    return (
        <div>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <h3>{producto.precio}</h3>
        </div>
    )

}

export default Detalle;

