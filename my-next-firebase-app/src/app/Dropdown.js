import React from "react";

export default function Dropdown({ opciones }) {
  return (
    <>
      <label htmlFor="dropdown">Selecciona una opción:</label>
      <select name="dropdown" id="dropdown">
        {opciones.map((op, index) => (
          <option key={index} value={op.nombre}>
            {op.nombre}
          </option>
        ))}
      </select>
    </>
  );
}
