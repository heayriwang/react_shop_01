import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

import './css/reset.css';
import './css/common.scss';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>

  </React.StrictMode>
);


