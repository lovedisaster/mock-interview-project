import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <link rel="preconnect" href="https://jsonplaceholder.typicode.com"></link>
    <App />
  </React.StrictMode>
);
