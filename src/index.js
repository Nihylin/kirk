import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Products from './components/Products';
import Vitrine from './components/Vitrine';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Vitrine />} />
      <Route path="produit" element={<Products />} />
      <Route path="vitrine" element={<Vitrine />} />
    </Routes>
  </BrowserRouter>
);
