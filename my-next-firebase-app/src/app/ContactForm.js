import React, { useState } from "react";

export default function ContactForm() {
  const [relleno, setRelleno] = useState({
    input1: false,
    input2: false,
    input3: false
  });

  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (relleno.input1 && relleno.input2 && relleno.input3) {
      setMensaje("Enviado con éxito");
    } else {
      setMensaje(
        `No enviado: ${
          !relleno.input1 ? "1" : !relleno.input2 ? "2" : "3"
        } valor sin rellenar`
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={() => setRelleno({ ...relleno, input1: true })}
        placeholder="Input 1"
      />
      <input
        onChange={() => setRelleno({ ...relleno, input2: true })}
        placeholder="Input 2"
      />
      <input
        onChange={() => setRelleno({ ...relleno, input3: true })}
        placeholder="Input 3"
      />
      <button type="submit">Enviar</button>
      <p>{mensaje}</p>
    </form>
  );
}
