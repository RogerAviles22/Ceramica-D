import React, { Component } from 'react';
import '../../assets/css/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="row d-flex justify-content-evenly  pt-2 px-5">
            <h1 className="col-12 text-center py-3" id="contacto">Contacto</h1>
                <div className="col-lg-5 col-7">
                    <div className="d-flex flex-column d-grid gap-3 px-2 mb-5 ">
                        <a className="whatsappLink mobile" href="whatsapp://send?text=Hola! Deseo comprar un producto&phone=+5930958706562&abid=+5930958706562">
                            <i className="bi bi-whatsapp"></i> +593 958 706 562
                        </a>
                        <a className="whatsappLink desktop" href="http://web.whatsapp.com/send?text=Hola! Deseo comprar un producto&phone=+5930958706562&abid=+5930958706562">
                            <i className="bi bi-whatsapp"></i> +593 958 706 562
                        </a>
                        <a href="mailto:domenicarivadeneyra@gmail.com"><i className="bi bi-envelope"></i> Gmail</a>
                        <a href="https://instagram.com/domenicarivadeneyra.ceramica?igshid=1jjcy1ejfx0ri" className="text-wrap"><i className="bi bi-instagram"></i> @domenicarivadeneyra.ceramica</a>
                    </div>
                </div>
                <div className="col-lg-4 col-4 my-2">
                    <p><i className="bi bi-calendar"></i> Lunes - Sábado.</p>
                    <p><i className="bi bi-clock"></i> 10am - 21pm</p>
                </div>
                <p className="text-center m-0 py-4 final fw-bold">¡ Hecho con mucho cariño y amor ! ~ 2021</p>
            </div>
        );
    }
}

export default Footer;