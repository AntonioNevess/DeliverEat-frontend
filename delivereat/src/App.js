import React from 'react';
import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom';

import MainNavBar from './Views/MainNavBar';
import Pedidos from './Views/Pedidos';
import Pessoas from './Views/Pessoas';
import Pratos from './Views/Pratos';
import Restaurantes from './Views/Restaurantes';

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <MainNavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />}/>
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/pessoas" element={<Pessoas />} />
          <Route path="/pratos" element={<Pratos />} />
          <Route path="/restaurantes" element={<Restaurantes />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}
