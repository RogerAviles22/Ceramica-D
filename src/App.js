import './App.css';

import {Component} from 'react';
import Navegador from './componentes/head/Navegador'
import Cabecera from './componentes/head/Cabecera'

class App extends Component {
  
  render() {
      return (   
          <div className="Inicio">
            <Cabecera/>
            <Navegador/>
          </div>
      );
  }
}

export default App;
