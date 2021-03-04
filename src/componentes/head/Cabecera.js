import React, { Component } from 'react';
import logo from '../../assets/img/logo/logo.png';

import '../../assets/css/Head.css'

class Cabecera extends Component {
    render() {
        return (
            <div className="text-center Head">
                <img className="img-fluid Logo" src={logo} alt="as" />
                <h1>Doménica Cerámica</h1>
            </div>
        );
    }
}

export default Cabecera;