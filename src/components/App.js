import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

// Importo componentes
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MenuPizzas } from './Main/MenuPizzas/MenuPizzas';
import { MenuHorneados } from './Main/MenuHorneados/MenuHorneados';
import { MenuPostres } from './Main/MenuPostres/MenuPostres';
import { MenuBebidas } from './Main/MenuBebidas/MenuBebidas';
import { MenuAdiciones } from './Main/MenuAdiciones/MenuAdiciones';

function App() {
  return (
    // <div className='app container-fluid'>
      <Router>
        <Header />
        <Main />
        <Footer />
        <Switch>
          <Route path='/MenuPizzas' component={MenuPizzas} />
          <Route path='/MenuHorneados' component={MenuHorneados} />
          <Route path='/MenuPostres' component={MenuPostres} />
          <Route path='/MenuBebidas' component={MenuBebidas} />
          <Route path='/MenuAdiciones' component={MenuAdiciones} />
        </Switch>
      </Router>
    //</div>
  );
}

export default App;
