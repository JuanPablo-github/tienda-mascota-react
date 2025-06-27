function Item({nombre, descripcion, precio, id}) {
    return (
        <div className="card">
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <p>Precio: ${precio}</p>
            <button onClick={() => console.log(`Item ID: ${id}`)}>Ver Detalles</button>
        </div>
    );
}

export default Item;