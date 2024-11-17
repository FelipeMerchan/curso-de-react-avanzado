/*
  Los componentes de orden superior (HOC, por sus siglas en inglés)
  en React son funciones que toman un componente como parámetro y
  devuelven otro componente. Este patrón permite agregar lógica o
  estilos adicionales a un componente, sin modificar su estructura
  interna. Con la introducción de los hooks en React, los HOCs han
  sido reemplazados en muchos casos, ya que los hooks permiten
  gestionar estados y lógica de una manera más directa y sencilla.
  En este ejercicio, exploraremos cómo construir un HOC básico para
  añadir un loader a un componente y luego compararemos esta
  implementación con su equivalente usando hooks para observar sus
  diferencias y beneficios.

  ¿Qué es un componente de orden superior?
  Un componente de orden superior es una función que toma un
  componente como argumento y devuelve otro componente modificado.
  Permite reutilizar lógica entre componentes sin alterar su estructura.
  Era común en React antes de la introducción de los hooks, para
  compartir lógica entre múltiples componentes.

  ¿Por qué los hooks han reemplazado en muchos casos a los HOCs?
  Los hooks simplifican la gestión de lógica compartida al permitir
  que el estado y otras funcionalidades sean reutilizadas directamente
  dentro del componente.
  Con los hooks, podemos crear una lógica similar sin envolver el
  componente en otra capa de función, lo que mejora la legibilidad y el
  rendimiento en algunos casos.

  ¿Cuándo conviene usar HOCs o hooks?
  HOCs: útiles cuando necesitamos reutilizar lógica en diferentes
  componentes sin introducir hooks en cada uno.
  Hooks: preferibles para lógica compleja en componentes individuales,
  ofreciendo una estructura más clara y eficiente.
*/

function withLoading<T extends object>(Component: React.ComponentType<T>) {
  return (props: T & { isLoading: boolean }) => {
    const { isLoading, ...rest } = props;

    return isLoading ? <p>Loading...</p> : <Component {...(rest as T)} />;
  };
}

interface UserComponentProps {
  name: string;
}

const UserComponent = ({ name }: UserComponentProps): JSX.Element => {
  return <p>Hello, {name}!</p>;
};

const UserWithLoading = withLoading(UserComponent);

export const ParentComponent = () => {
  return (
    <div>
      <UserWithLoading isLoading={true} name={"Felipe"} />
      <UserWithLoading isLoading={false} name={"Daniel"} />
    </div>
  );
};
