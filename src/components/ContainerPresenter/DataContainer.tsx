/*
  El patrón de diseño Container-Presenter permite organizar los
  componentes en una aplicación separando la lógica de negocio y
  la presentación visual. Este enfoque divide los componentes en dos
  tipos: los contenedores, que gestionan la lógica y el estado, y los
  presentadores, responsables únicamente de la visualización de datos
  sin involucrar lógica.

  ¿Qué es un componente de tipo presentacional?
  Son componentes enfocados en mostrar datos recibidos a través de
  props, sin manejar lógica de negocio ni estado.
  Utilizan propiedades como name, description e image para renderizar
  contenido.
  Su estructura es simple y se basa en recibir datos preprocesados,
  idealmente desde un componente contenedor.

  ¿Cómo crear un componente contenedor?
  El componente contenedor (DataContainer) se encarga de la lógica de
  negocio, como realizar fetch de datos.
  Define un estado local para manejar los datos (data) usando useState
  y controla los procesos de carga y error.
  Con el hook useEffect, el componente realiza un fetch a un archivo
  JSON, y en caso de error, gestiona los mensajes correspondientes.

  ¿Cuáles son los beneficios del patrón Container-Presenter?
  1. Separación de responsabilidades: Evita que la lógica de negocio
  interfiera con el diseño visual.
 2. Mantenibilidad: Simplifica la modificación de componentes al tener
 funciones independientes.
  3. Escalabilidad: Facilita la expansión del código sin afectar la
  estructura del proyecto.
*/

import { useEffect, useState } from "react";
import { DataPresenter } from "./DataPresenter";

interface DataItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const DataContainer = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/data.json");
        if (!response.ok) {
          throw new Error("Error al cargar los datos");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(`Error al cargar los datos: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      <DataPresenter data={data} />
    </div>
  );
};
