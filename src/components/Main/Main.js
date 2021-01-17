import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Menu } from '../Main/Menu/Menu.js';

export const Main = () => {
  return (
    <>
      <main className='row main'>
        <div className='container-fluid'>
          <section className='row publicity'></section>
          <section className='row'>
            <div className='col-12 col-md-8 menu'>
              <Menu />
            </div>
            <div className='col-12 col-md-4 order'></div>
          </section>
        </div>
      </main>
    </>
  );
};
