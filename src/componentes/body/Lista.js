import React from 'react';
import Carta from './Carta';

function Lista(props) {
    return(
        <div className="container-fluid">
            <div className="list-card row g-4 d-flex justify-content-evenly">
            {
                props.items.map(item =>
                    <Carta 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        img={item.img}
                        precio={item.precio}
                    />
                )
            }
        </div>
        </div>
        
    );
}

export default Lista;