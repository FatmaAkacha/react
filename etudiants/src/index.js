import React from 'react';
import Recherche from './Recherche';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Form';
import Pays from './component/Pays';
import Region from './component/Region';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recherche/:id" element={<Recherche />} />
      <Route path="/form" element={<Form />} />
      <Route path="/pays" element={<Pays />} />
      <Route path="/region/:reg" element={<Region />} />
    </Routes>
  </Router>
);