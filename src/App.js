import './App.css';

import {Component} from 'react';
import Navegador from './componentes/head/Navegador'
import Cabecera from './componentes/head/Cabecera'
import Welcome from './componentes/body/Welcome'

class App extends Component {
  render() {
      return (   
        <div>
          <div className="Inicio">
            <Cabecera/>
            <Navegador/>
          </div>

          <div className="Cuerpo container-fluid pt-4 ">
            <Welcome/>
          </div>         

        </div>
      );
  }
}

export default App;
