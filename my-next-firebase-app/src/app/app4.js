import React from 'react';
import ShoppingList from './ShoppingList';

const productos = [
  { id: 1, nombre: 'Manzanas'},
  { id: 2, nombre: 'Plátanos'},
  { id: 3, nombre: 'Naranjas'},
];

export default function App4() {
  return (
    <div>
      <h2>Mi Lista de Compras</h2>
      <ShoppingList productos={productos} />
    </div>
  );
}
