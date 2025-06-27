import { useState, useEffect } from 'react';
import productosMascotas from "../productosMascotas.js";
import ItemList from './Itemlist.jsx';

import React from 'react';


function ItemListContainer () {
   
const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productosMascotas)
    },2000)
    })
    
    fetchProductos.then((data) => {
    setItems(data)
    })
   },[])


    return (
      <div className="container">
        <ItemList items={items}/>
      </div>
    )
  
}

export default ItemListContainer