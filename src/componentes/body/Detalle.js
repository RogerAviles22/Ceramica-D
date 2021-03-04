import React, { Component } from 'react';


class Detalle extends Component {
    render() {
        return (
            <section className="py-5">
                <h1 className="text-center" id="detalles" >Detalles</h1>
                <hr />
                <div className="container-fluid py-2 detalle">
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 col-12 d-flex align-items-stretch">
                            <div className="card text-center m-3">
                                <div class="card-header py-3">
                                    <i class="bi bi-cup-fill card-img-top"></i>
                                </div>
                                <div class="card-body ">
                                    <p>Producto resistente al calor y fabricado con 100% barro.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12 d-flex align-items-stretch">
                            <div className="card text-center m-3">
                                <div class="card-header py-3">
                                    <i class="bi bi-brush-fill card-img-top"></i>
                                </div>
                                <div class="card-body">
                                    <p>Personaliza tus tazas y macetas según tu estilo.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12 d-flex align-items-stretch">
                            <div className="card text-center m-3">
                                <div class="card-header py-3">
                                    <i class="bi bi-shop card-img-top"></i>
                                </div>
                                <div class="card-body">
                                    <p>Servicio a domicilio gratuito para los sectores de Guayaquil.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12 d-flex align-items-stretch">
                            <div className="card text-center m-3">
                                <div class="card-header py-3">
                                    <i class="bi bi-clock-fill card-img-top"></i>
                                </div>
                                <div class="card-body">
                                    <p>Realiza tu pedido con 1 semana de anticipación.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Detalle;