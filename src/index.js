import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import ProductContext from './context/ProductContext'
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  
  <BrowserRouter>
  <ProductContext>
  <App />
  </ProductContext>
   </BrowserRouter>
);
