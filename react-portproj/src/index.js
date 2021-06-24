import React from 'react';
//import ReactDOMServer from 'react-dom/server';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/style.css';
import './styles/images.css';
import './styles/no-touch.min.css';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App  />,
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);