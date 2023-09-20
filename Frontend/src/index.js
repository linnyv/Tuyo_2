import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuContextProvider } from './components/context/AuContex';

const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuContextProvider>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </AuContextProvider>
);