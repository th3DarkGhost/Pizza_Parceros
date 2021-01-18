import React from "react";
import "./Main.scss";
import { MenuBar } from "../Main/MenuBar/MenuBar.js";
import { Switch, Route } from "react-router-dom";
import { MenuPizzas } from "./MenuPizzas/MenuPizzas.js";
import { MenuHorneados } from "./MenuHorneados/MenuHorneados";
import { MenuPostres } from "./MenuPostres/MenuPostres";
import { MenuBebidas } from "./MenuBebidas/MenuBebidas";
import { MenuAdiciones } from "./MenuAdiciones/MenuAdiciones";

export const Main = () => {
  return (
    <>
      <main>
        <section className="MenuPedido">
          <div className="MenuContainer">
            <div className="MenuContainer__NavBar">
              <MenuBar />
            </div>
            <div className="MenuContainer__AreaMenu">
              <Switch>
                <Route path="/MenuPizzas" component={MenuPizzas} />
                <Route path="/MenuHorneados" component={MenuHorneados} />
                <Route path="/MenuPostres" component={MenuPostres} />
                <Route path="/MenuBebidas" component={MenuBebidas} />
                <Route path="/MenuAdiciones" component={MenuAdiciones} />
              </Switch>
            </div>
          </div>
          <div className="PedidoContainer"></div>
        </section>
      </main>
    </>
  );
};
