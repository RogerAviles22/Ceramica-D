import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './componentes/pie/Footer';
import Body from './componentes/body/Body';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <Body />,
  document.getElementById('body')
);

ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);

