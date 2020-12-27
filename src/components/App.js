import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (

    <div className="App container-fluid">

      <header className="row">
          <nav className="navbar fixed-top header__navBar">
          </nav>
      </header>

      <main className="row main">
        <div className="container-fluid">
          <section className="row publicity">
          </section>
          <section className="row">
                <div className="col-12 col-md-8 menu"></div>
                <div className="col-12 col-md-4 order"></div>
          </section >
        </div>
      </main>

      <footer className="row footer">
        <div></div>
      </footer>
      
    </div>
    
  );
}

export default App;
