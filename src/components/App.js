// Imports 

import "./App.scss";

// Componentes

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
