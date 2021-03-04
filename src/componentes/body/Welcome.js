import React, { Component } from 'react';
import collage from "../../assets/img/productos/collage1.jpeg"

class Welcome extends Component {
    render() {
        return (
            <section className="row d-flex justify-content-center align-items-center">
                <img className="col-xl-3 col-md-5 col-12" src={collage} alt="collage1.jpg"/>
                <p className="col-xl-7 col-md-7 col-12 text-center">Pequeño emprendimiento dedicado a la creación de bonitos productos realizados con cerámica de forma artesanal.</p>
            </section>
        );
    }
}

export default Welcome;