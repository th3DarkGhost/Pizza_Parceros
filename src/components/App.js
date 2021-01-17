import "./App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

// Importo componentes
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    // <div className='app container-fluid'>
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
    //</div>
  );
}

export default App;
