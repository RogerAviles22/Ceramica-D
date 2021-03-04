import './App.css';

import {Component} from 'react';
import Navegador from './componentes/head/Navegador'
import Cabecera from './componentes/head/Cabecera'
import Welcome from './componentes/body/Welcome'
import Detalle from './componentes/body/Detalle'
import Ceramica from './componentes/body/Ceramica';

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
            <Ceramica/>
            <Detalle/>
          </div>         

        </div>
      );
  }
}

export default App;
