import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
// import switch y router
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import { Prueba } from '../prueba/prueba';

export const Header = () => {
  return (
    <>
      <Router>
        <header className='row'>
          <nav className='navbar fixed-top header__navBar'>
            <ul>
              <li>
                <Link to='/prueba'>Prueba</Link>
              </li>
              <li>
                <Link to='/'>home</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route path='/prueba' component={Prueba} />
      </Router>
    </>
  );
};
