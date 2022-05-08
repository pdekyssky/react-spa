import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './layout';

const container = document.querySelector('app-container')
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



