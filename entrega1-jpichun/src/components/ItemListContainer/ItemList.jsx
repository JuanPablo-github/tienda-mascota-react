import { useState } from "react";
import Item from "./Item.jsx";

const categorias ={
    ALIMENTOS: "Alimentos",
    REMEDIOS : "Remedios Veterinarios",
    JUGUETES: "Juguetes",
    HIGIENE: "Higiene",
    ACCESORIOS: "Accesorios"
   
};

function ItemList({ items = []}) {

    const [selectedCategory, setSelectedCategory] = useState("");	

    const filteredItems = selectedCategory
        ? items.filter(item => item.categoria === selectedCategory) 
        : items;

    return (

        <div>
            <div className="button-group">
                <button onClick={() => setSelectedCategory("")}>
                    Todos
                </button>
                <button onClick={() => setSelectedCategory(categorias.ACCESORIOS)}>
                    Accesorios
                </button>
                <button onClick={() => setSelectedCategory(categorias.HIGIENE)}>
                    Higiene
                </button>
                <button onClick={() => setSelectedCategory(categorias.ALIMENTOS)}>
                    Alimento
                </button>
                <button onClick={() => setSelectedCategory(categorias.JUGUETES)}>
                    Juguetes
                </button>
                <button onClick={() => setSelectedCategory(categorias.REMEDIOS)}>
                    Remedios
                </button>

            </div>

            <div className="item-grid">
            {filteredItems.map(item => (
                <Item
                key={item.id}
                id={item.id}
                nombre={item.nombre}
                descripcion={item.descripcion}
                precio={item.precio}
                />
            ))}
            </div>


        </div>
    )


}

export default ItemList;




