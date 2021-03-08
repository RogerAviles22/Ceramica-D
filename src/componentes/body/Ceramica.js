import React, { Component } from 'react';
import Lista from './Lista';
import '../../assets/css/Body.css';


class Ceramica extends Component {
    constructor(props){
        super(props);
        this.state = {
          tazas:[   
            {
                "id": 3,
                "img": "muneica.png",
                "title": "Taza de muñeca",
                "precio": 7.00
            },
            {
                "id": 4,
                "img": "jarron.png",
                "title": "Jarrón/ Jarra",
                "precio": 7.00
            },
            {
                "id": 2,
                "img": "flores.png",
                "title": "Flores",
                "precio": 6.50
            },
            {
                "id": 1,
                "img": "expresso.png",
                "title": "Expresso",
                "precio": 6.00
            }
        ], 
        macetas:[            
            {
                "id": 8,
                "img": "castillo.png",
                "title": "Castillo",
                "precio": 14.00
            },{
                "id": 5,
                "img": "muneica2.png",
                "title": "Muñeca",
                "precio": 12.50
            },{
                id: 0,
                img: "gato.png",
                title: "Gatito Personalizado",
                precio: 10.00
            },{
                "id": 6,
                "img": "rectangle.png",
                "title": "Dado",
                "precio": 7.50
            },{
                "id": 7,
                img: "rectangle2.png",
                title: "Montaña",
                precio: 7.50
            },{
                "id": 9,
                "img": "minin.png",
                "title": "Minis Nido",
                "precio": 3.50
            },{
                "id": 10,
                "img": "kawaii.png",
                "title": "Minis Kawaii",
                "precio": 3.50
            }
        ],
        platos:[
            {
                "id": 11,
                "img": "plato.png",
                "title": "Tendido",
                "precio": 5.0
            }
        ]
        }
      }

    render() {
        return (
            <section className="ceramica mt-3">
            <h1 className="text-center" id="ceramica">Cerámica</h1>
            <hr/>            
            <h3 className="ms-2 my-3">Macetas <i className="bi bi-archive-fill"></i> </h3>
                <Lista items={this.state.macetas}/>
            <h3 className="ms-2 my-3">Tacitas <i className="bi bi-cup-fill"></i> </h3>
                <Lista items={this.state.tazas}/>
            <h3 className="ms-2 my-3">Platos <i className="bi bi-vinyl"></i> </h3>
                <Lista items={this.state.platos}/>
            </section>
        );
    }
}

export default Ceramica;