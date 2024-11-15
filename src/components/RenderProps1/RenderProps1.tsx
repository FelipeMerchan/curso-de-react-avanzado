/* Render Props permite a un componente recibir una función
  como prop y así determinar cómo renderizar su contenido desde
  otro componente. */

/*
    configuramos dos componentes, un padre y un hijo. El padre utiliza
    Render Props para indicar cómo debe el hijo mostrar el contenido.
    La función render del padre recibe un parámetro (name) y retorna
    un elemento JSX que muestra un saludo personalizado.

    Este patrón otorga control al componente padre, que decide cómo
    se presenta el contenido en el hijo, promoviendo la reutilización
    de código y la separación de lógica.
  */

interface ChildComponentProps {
  render: (name: string) => JSX.Element;
}

export const ChildComponent = ({
  render,
}: ChildComponentProps): JSX.Element => {
  const name = "Felipe";

  return <div>{render(name)}</div>;
};

export const ParentComponent = (): JSX.Element => {
  return <ChildComponent render={(name) => <p>Hello, {name}!</p>} />;
};
