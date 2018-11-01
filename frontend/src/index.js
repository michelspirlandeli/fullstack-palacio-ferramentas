import React from 'react';
// Importando o React Dom para injetar o <APP /> na tag <div id="root"></div> do index.html
import ReactDOM from 'react-dom';
// Importando o componenet APP
import App from './App';
// Importando a nossa Lib de rotas
import { BrowserRouter } from 'react-router-dom'
// Importando o css
import './index.css';


ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))