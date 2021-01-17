import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Menu } from "../Main/Menu/Menu.js";
import { Switch, Route } from "react-router-dom";
import { MenuPizzas } from "./MenuPizzas/MenuPizzas.js";
import { MenuHorneados } from "./MenuHorneados/MenuHorneados";
import { MenuPostres } from "./MenuPostres/MenuPostres";
import { MenuBebidas } from "./MenuBebidas/MenuBebidas";
import { MenuAdiciones } from "./MenuAdiciones/MenuAdiciones";

export const Main = () => {
  return (
    <>
      <main className="row main">
        <div className="container-fluid">
          <section className="row publicity"></section>
          <section className="row">
            <div className="col-12 col-md-8 menu">
              <div>
                <Menu />
              </div>
              <div>
                <Switch>
                  <Route path="/MenuPizzas" component={MenuPizzas} />
                  <Route path="/MenuHorneados" component={MenuHorneados} />
                  <Route path="/MenuPostres" component={MenuPostres} />
                  <Route path="/MenuBebidas" component={MenuBebidas} />
                  <Route path="/MenuAdiciones" component={MenuAdiciones} />
                </Switch>
              </div>
            </div>
            <div className="col-12 col-md-4 order"></div>
          </section>
        </div>
      </main>
    </>
  );
};
