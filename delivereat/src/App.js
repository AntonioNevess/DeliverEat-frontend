import React from 'react';
import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom';

// Importação das páginas
import MainNavBar from './Views/MainNavBar';
import Pedidos from './Views/Pedidos';
import Pratos from './Views/Pratos';
import Restaurantes from './Views/Restaurantes';
import Login from './Views/Login';
import DetalhesPedidos from './Views/DetalhesPedidos';

export default function App() {
  return (
    <React.Fragment>
      <Router>
        {/* NavBar aparece sempre */}
        <MainNavBar />
        <Routes>
          {/* Rotas para todas as páginas do projeto */}
          <Route path="/" element={<Navigate to="/Home" />}/>
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/pratos/:restauranteId" element={<Pratos />} />
          <Route path="/restaurantes" element={<Restaurantes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/DetalhesPedido" element={<DetalhesPedidos />}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}
