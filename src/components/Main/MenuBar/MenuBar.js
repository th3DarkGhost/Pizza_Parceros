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
            <Link to="/MenuPizzas">
              <button>
                <p>Pizzas</p>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/MenuHorneados">
              <button>
                <p>Horneados</p>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/MenuPostres">
              <button>
                <p>Postres</p>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/MenuBebidas">
              <button>
                <p>Bebidas</p>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/MenuAdiciones">
              <button>
                <p>Adiciones</p>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
