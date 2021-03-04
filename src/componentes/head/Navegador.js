import React, { Component } from 'react';

class Navegador extends Component {
    

    render() {
        return (
            <div  className="container-fluid sticky navegador">
                <div className="row py-3 content">
                    <div className="d-flex justify-content-around fw-bold">
                        <a className="nav-link" href="#ceramica">CERÁMICA</a>
                        <a className="nav-link" href="#detalles">DETALLES</a>
                        <a className="nav-link" href="#contacto">CONTACTO</a>
                    </div>
                </div>
            </div>
        );
    }
}



export default Navegador;