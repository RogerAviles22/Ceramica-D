import React, { Component } from 'react';
import collage from "../../assets/img/productos/collage1.jpeg"

class Welcome extends Component {
    render() {
        return (
            <section className="row d-flex justify-content-center align-items-center py-3">
                <img className="welcome col-xl-3 col-md-5 col-12" src={collage} alt="collage1.jpg"/>
                <p className="col-xl-4 col-md-5 col-12 mt-2 text-center">Pequeño emprendimiento dedicado a la creación de productos cerámicos realizados de forma artesanal.</p>
            </section>
        );
    }
}

export default Welcome;