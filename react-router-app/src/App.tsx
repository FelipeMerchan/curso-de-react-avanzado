import { Link, Route, Routes } from "react-router-dom";
import { Product } from "./components/Product";
import { Home } from "./components/Home";
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
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
      </Routes>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
