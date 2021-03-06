import React from 'react'

function Carta(props) {
    return (
        <div className="card col-lg-2 col-sm-4 col-6">
            <img className="card-img-top" src={'nuevo/'+props.img} alt={props.img} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                
            </div>
            <div class="card-footer text-end">
                <p>${props.precio}</p>
            </div>
        </div>
    );
}

export default Carta;