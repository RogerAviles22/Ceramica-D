import React, { Component } from 'react';
import Carta from './Carta'

class Ceramica extends Component {
    render() {
        return (
            <section className="mt-3">
            <h1 className="text-center" id="ceramica">Cerámica</h1>
            <hr/>
            <h3>Tacitas <i class="bi bi-cup-fill"></i> </h3>
            <Carta/>
            <h3>Macetas <i class="bi bi-archive-fill"></i> </h3>
            </section>
        );
    }
}

export default Ceramica;