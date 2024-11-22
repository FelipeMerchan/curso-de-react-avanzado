import { Link, Outlet } from "react-router-dom";

/* ¿Cómo crear los componentes para las rutas anidadas?
  Creamos tres componentes: Dashboard, Overview, y Settings.
  En el componente Dashboard, añadimos enlaces de navegación hacia overview
  y settings utilizando el componente Link de React Router DOM.
  Para renderizar el contenido de las rutas hijas dentro de Dashboard,
  incluimos el componente Outlet de React Router en Dashboard.
*/
export const Dashboard = (): JSX.Element => {
  return (
    <section>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="overview">Overview</Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
        </ul>
      </nav>
      {/* Outlet renders the child route's element, if there is one: */}
      <Outlet />
    </section>
  );
};
