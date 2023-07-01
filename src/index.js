import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import RecipieContextProvder from './context/RecipieContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <RecipieContextProvder>
    <App />
    </RecipieContextProvder>
    </BrowserRouter>
   
  </React.StrictMode>
);

