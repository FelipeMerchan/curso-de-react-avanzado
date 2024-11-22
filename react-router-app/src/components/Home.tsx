/*
  ¿Qué es la navegación programática?
  La navegación programática permite cambiar de vista mediante código
  sin necesidad de un enlace visible. Esto es útil para casos como
  redirecciones automáticas tras una acción del usuario (como enviar un
  formulario).
*/

import { Link, useNavigate } from "react-router-dom";

export const Home = (): JSX.Element => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <section>
      <h2>Home Page</h2>
      <ul>
        <li>
          <Link to="/product/1">Product 1</Link>
        </li>
        <li>
          <Link to="/product/2">Product 2</Link>
        </li>
      </ul>
      <button onClick={goToAbout}>Go to about</button>
    </section>
  );
};
