import './App.css';

import React, { useState, useRef, useEffect } from 'react'
import Cabecera from './componentes/head/Cabecera'

function App () {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);
 
  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > (elTopOffset + elHeight)) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };
 
  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height)
    }
 
    window.addEventListener('scroll', handleScrollEvent);
 
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);
  
      return (   
          <div className="Inicio" style={{ marginTop: sticky.offset }}>
            <Cabecera/>
            <div id="navegador" className={`container-fluid navegador ${sticky.isSticky ? ' sticky' : ''}`} ref={headerRef}>
                <div className="row py-3 content">
                    <div className="d-flex justify-content-around fw-bold">
                        <a className="nav-link" href="#ceramica">CERÁMICA</a>
                        <a className="nav-link" href="#detalles">DETALLES</a>
                        <a className="nav-link" href="#contacto">CONTACTO</a>
                    </div>
                </div>
            </div>
          </div>
      );
}

export default App;
