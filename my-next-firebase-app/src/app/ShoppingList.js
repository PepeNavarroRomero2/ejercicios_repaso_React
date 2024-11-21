import React, { useState } from 'react';

export default function ShoppingList({ productos }) {
  const [productList, setProductList] = useState(productos);

  const eliminarProducto = (id) => {
    setProductList(productList.filter((producto) => producto.id !== id));
  };

  return (
    <div>
      <h3>Lista de Compras</h3>
      <ul>
        {productList.map((producto) => (
          <li key={producto.id}>
            {producto.nombre}
            <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
