import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
// import switch y router
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Router>
        <header className="row">
          <nav className="navbar fixed-top header__navBar"></nav>
        </header>
      </Router>
    </>
  );
};
