import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Menu } from "../Main/Menu/Menu.js";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { MenuPizzas } from "./MenuPizzas/MenuPizzas.js";
import { MenuHorneados } from "./MenuHorneados/MenuHorneados.js";
import { MenuPostres } from "./MenuPostres/MenuPostres.js";
import { MenuBebidas } from "./MenuBebidas/MenuBebidas.js";
import { MenuAdiciones } from "./MenuAdiciones/MenuAdiciones.js";

export const Main = () => {
  return (
    <>
      <Router>
        <main className="row main">
          <div className="container-fluid">
            <section className="row publicity"></section>
            <section className="row">
              <div className="col-12 col-md-8 menu">
                <Menu />
                <Route path="/MenuPizzas" component={MenuPizzas} />
                <Route path="/MenuHorneados" component={MenuHorneados} />
                <Route path="/MenuPostres" component={MenuPostres} />
                <Route path="/MenuBebidas" component={MenuBebidas} />
                <Route path="/MenuAdiciones" component={MenuAdiciones} />
              </div>
              <div className="col-12 col-md-4 order"></div>
            </section>
          </div>
        </main>
      </Router>
    </>
  );
};
