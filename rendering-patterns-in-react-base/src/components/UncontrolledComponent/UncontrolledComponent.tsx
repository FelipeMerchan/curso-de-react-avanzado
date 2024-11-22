/*
  ¿Qué es un componente no controlado y cuándo usarlo?
  Un componente no controlado mantiene su valor fuera del estado de
  React, siendo ideal para formularios simples o cuando el valor no
  necesita control inmediato.
  Uso de referencias (Refs): En vez de onChange, se emplean referencias
  para capturar el valor cuando sea necesario.
  Ejemplo de botón: Puedes mostrar el valor solo tras hacer clic en
  un botón, sin la necesidad de actualizaciones en tiempo real.
*/

import { useRef } from "react";

export const UncontrolledInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => {
    if (inputRef.current) {
      alert(`Nuevo producto en el carrito ${inputRef.current.value}`);
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Nombre del producto" />
      <button onClick={handleSubmit}>Añadir al carrito</button>
    </div>
  );
};
