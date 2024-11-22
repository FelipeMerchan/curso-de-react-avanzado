import { Link, Route, Routes } from "react-router-dom";
import { Product } from "./components/Product";
import { Home } from "./components/Home";
import { Settings } from "./components/Settings";
import { Overview } from "./components/Overview";
import { Dashboard } from "./components/Dashboard";
import { Suspense } from "react";
import { Profile } from "./components/Profile";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { NotFound } from "./components/NotFound";
/*
  ¿Qué es el enrutamiento dinámico?
  El enrutamiento dinámico permite configurar rutas que acepten
  parámetros, como un ID o nombre de usuario, para mostrar contenido
  específico. Por ejemplo:
  Supongamos que queremos ver el perfil de un usuario. Podemos crear
  una ruta como /users/:id donde :id es el parámetro dinámico que
  representa el ID del usuario. En lugar de tener múltiples rutas
  (product/1, product/2, etc.), configuramos una sola ruta como
  product/:id que cargará el componente del producto basándose
  en el valor del ID pasado en la URL.
*/

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        {/* Rutas anidadas: */}
        {/* Empezamos por definir una nueva página llamada dashboard
        en el Navbar y en el sistema de rutas, de manera similar a home y about.
        Para permitir la anidación, usamos el asterisco *, lo cual indica que
        todas las subrutas bajo dashboard se manejarán como rutas hijas.
        Dentro de dashboard, definimos dos rutas hijas: overview y settings.
        Esto permite que dashboard actúe como un contenedor para las secciones específicas. */}
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="overview" element={<Overview />}></Route>
          <Route
            path="settings"
            element={
              /* ¿Cómo funciona el lazy loading en componentes?
              Lazy loading permite cargar componentes solo cuando se necesitan, optimizando
              el uso de recursos en la aplicación. Para implementar lazy loading:
              1. Importamos Suspense de React y lo usamos para envolver el
              componente Settings en las rutas.
              2. Agregamos un fallback, que es un contenido provisional
              mostrado mientras el componente Settings se carga. Esto
              puede ser un simple mensaje de “Loading…” o un indicador
              visual como un shimmer.
              */
              <Suspense fallback={<div>Loading</div>}>
                <Settings />
              </Suspense>
            }
          ></Route>
        </Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={false}>
              <Profile />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
