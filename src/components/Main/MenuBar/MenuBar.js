import React from "react";
import { Link } from "react-router-dom";

export const MenuBar = () => {
  return (
    <>
        <div>
            <img src="src\components\Media\PNG\001-pizza.png"></img>
        </div>
        <nav>
          <ul>
            <li>
              <button><Link to="/MenuPizzas">Pizzas</Link></button>
            </li>
            <li>
            <button><Link to="/MenuHorneados">Horneados</Link></button>
            </li>
            <li>
            <button><Link to="/MenuPostres">Postres</Link></button>
            </li>
            <li>
            <button><Link to="/MenuBebidas">Bebidas</Link></button>
            </li>
            <li>
            <button><Link to="/MenuAdiciones">Adiciones</Link></button>
            </li>
          </ul>
        </nav>
    </>
  );
};
