import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductList from '../../product-market/src/Product/ProductList';



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ProductList/>
  </React.StrictMode>
);