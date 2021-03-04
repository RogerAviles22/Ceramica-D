import React, { Component } from 'react';

class Navegador extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#a">CERÁMICA</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#a">DETALLES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#a">CONTACTO</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navegador;