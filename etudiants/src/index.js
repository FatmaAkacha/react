import React from 'react';
import Recherche from './Recherche';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Form';
import Pays from './component/Pays';
import Region from './component/Region';
import Classes from './Classes';
import Modifier from './Modifier';
import Ajouter from './Ajouter';
import Supprimer from './Supprimer';
import RechercheA from './RechercheA';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recherche/:id" element={<Recherche />} />
      <Route path="/form" element={<Form />} />
      <Route path="/pays" element={<Pays />} />
      <Route path="/region/:reg" element={<Region />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/modifier" element={<Modifier />} />
      <Route path="/ajouter" element={<Ajouter />} />
      <Route path="/supprimer" element={<Supprimer />} />
      <Route path="/rechercheA" element={<RechercheA />} />
    </Routes>
  </Router>
);