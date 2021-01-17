import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

export const Menu = () => {
  return (
    <>
      <Router>
        <div>
          <img></img>
          <nav className="">
            <ul>
              <li>
                <Link to="/MenuPizzas">Pizzas</Link>
              </li>
              <li>
                <Link to="/MenuHorneados">Horneados</Link>
              </li>
              <li>
                <Link to="/MenuPostres">Postres</Link>
              </li>
              <li>
                <Link to="/MenuBebidas">Bebidas</Link>
              </li>
              <li>
                <Link to="/MenuAdiciones">Adiciones</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Router>
    </>
  );
};
