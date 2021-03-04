import React, { Component } from 'react';
import cat  from '../../assets/img/productos/taza1.jpeg';

class Carta extends Component {
    render() {
        return (
            <div className="card col-lg-4 col-sm-4 col-6">
                <img className="card-img-top" src={cat} alt="name.jpg" />
                <div class="card-body">
                    <h5 class="card-title">Gatito Azul</h5>
                    <p>Precio: $5.0</p>

                </div>


                
            </div>
        );
    }
}

export default Carta;