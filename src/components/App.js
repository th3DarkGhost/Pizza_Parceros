import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

// Importo componentes
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';

function App() {
  return (
    <div className='app container-fluid'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
