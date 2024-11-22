/*
  Los componentes controlados y no controlados son dos métodos clave
  para gestionar inputs y formularios en interfaces de usuario en React.
  A través de ellos, puedes decidir si deseas un control inmediato
  sobre el valor ingresado o si prefieres capturarlo de forma indirecta
  según la acción del usuario. A continuación, exploramos estos
  conceptos y su implementación en código.

  ¿Qué es un componente controlado y cómo funciona?
  Un componente controlado se caracteriza por manejar el valor del input
  directamente en el estado del componente. Esto permite:
  1. Reactividad: React renderiza nuevamente cada vez que el estado
  cambia, reflejando el valor actual en la interfaz.
  2. Validaciones en tiempo real: Puedes validar o filtrar el input
  mientras el usuario escribe, facilitando la detección de errores.

  ¿Cuándo elegir un componente controlado o no controlado?
  Componentes controlados son ideales cuando:
  1. Necesitas validar datos en tiempo real.
  2. Requieres una interfaz reactiva que responda a cada cambio en el input.

  Componentes no controlados funcionan mejor cuando:
  1. El valor se procesa solo tras un evento específico, como un clic.
  2. Buscas una implementación más simple en formularios sin validaciones complejas.
*/

import { useState } from "react";

export const ControlledInput = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setValue(event.target.value)}
        value={value}
        placeholder="Ingresa el código del cupón"
      />
      {value && (
        <p>
          Cupón de descuento: <b>{value}</b>
        </p>
      )}
    </div>
  );
};
