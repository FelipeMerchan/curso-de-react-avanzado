/*
  El patrón Compound Component en React permite crear componentes que
  colaboran estrechamente entre sí, como un componente principal y sus
  subcomponentes, para construir funcionalidades complejas de forma
  modular y flexible. Aquí exploramos cómo construir un sistema de
  pestañas (tabs), donde el componente padre controla cuál pestaña
  está activa y los componentes hijos solo gestionan su contenido.

  Es útil para crear componentes reutilizables y modulares en
  aplicaciones de React, mejorando la flexibilidad y manteniéndolos
  fáciles de manejar y extender.
*/

import { ReactNode } from "react";

interface TabProps {
  label: string;
  children: ReactNode;
}

const Tab = ({ label, children }: TabProps): JSX.Element => {
  return (
    <>
      <em>{label}</em>
      <span>{children}</span>
    </>
  );
};

export default Tab;
