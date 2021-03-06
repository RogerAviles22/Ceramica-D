import React, { Component } from 'react';
import Welcome from './Welcome'
import Detalle from './Detalle'
import Ceramica from './Ceramica';

class Body extends Component {
    render() {
        return (
            <div className="contenido Cuerpo container-fluid pt-4 ">
            <Welcome/>
            <Ceramica/>
            <Detalle/>
          </div>
        );
    }
}

export default Body;