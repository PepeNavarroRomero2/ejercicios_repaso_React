import React from "react";
import Dropdown from "./Dropdown";

const opciones = [
  { nombre: "paco" },
  { nombre: "fran" },
  { nombre: "curro" },
  { nombre: "kisko" }
];

export default function App5() {
  return (
    <div>
      <h1>Menú desplegable</h1>
      <Dropdown opciones={opciones} />
    </div>
  );
}
