import React, { useState } from "react";

function NumericInput() {
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div>
      {/* <label htmlFor="numeric-input">Ingrese un número:</label>
      <input
        id="numeric-input"
        type="number"
        value={number}
        onChange={handleChange}
        placeholder="Ejemplo: 123"
      />
      <p>Valor ingresado: {number}</p> */}
    </div>
  );
}

export default NumericInput;
