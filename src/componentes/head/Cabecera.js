import React, { Component } from 'react';
import logo from '../../assets/img/logo/logo.png';
import '../../assets/css/Head.css'

class Cabecera extends Component {
    render() {
        return (
            <div className="text-center Head">
                <img className="img-fluid Logo animate__animated animate__zoomIn" src={logo} alt="as" />
                <h1 className="animate__animated animate__fadeIn animate__delay-1s">Doménica Rivadeneyra Cerámica</h1>
            </div>
        );
    }
}

export default Cabecera;