/* 
  El patrón de control props permite a un componente padre manejar
  el estado de un componente hijo, facilitando una comunicación
  controlada entre ambos. Esto resulta especialmente útil para
  gestionar estados y personalizar comportamientos. En esta lección,
  veremos un ejemplo práctico de un toggle controlado por el padre,
  y exploraremos sus beneficios para la reutilización y flexibilidad
  del código.

  ¿Qué beneficios aporta el uso de control props?
  1. Gestión centralizada del estado: El padre controla el estado del
  hijo, simplificando la lógica de la aplicación.
  2. Comunicación padre-hijo: Facilita la transmisión de información en
  una única dirección, lo cual es esencial para manejar estados en
  aplicaciones complejas.
  3. Reutilización de código: El componente hijo se puede utilizar
  en otros contextos, manteniendo el control desde el padre.
  4. Flexibilidad y personalización: La lógica de estado del hijo es
  fácilmente adaptable para diferentes casos de uso.
*/

import { useState } from "react";

interface ToggleProps {
  isToggled?: boolean;
  onToggle?: (value: boolean) => void;
}

export const Toggle = ({
  isToggled = false,
  onToggle,
}: ToggleProps): JSX.Element => {
  const [internalToggle, setInternalToggle] = useState(isToggled);

  const toggle = () => {
    const newToggle = !internalToggle;
    setInternalToggle(newToggle);

    if (onToggle) {
      onToggle(newToggle);
    }
  };

  return <button onClick={toggle}>{internalToggle ? "ON" : "OFF"}</button>;
};

export const ParentComponent = () => {
  const [toggleState, setToggleState] = useState(false);

  return (
    <div>
      <p>Toggle is {toggleState ? "ON" : "OFF"}</p>
      <Toggle isToggled={toggleState} onToggle={setToggleState} />
    </div>
  );
};
