import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Pratos() {
  const { restauranteId } = useParams();
  const [listaPratos, setListaPratos] = useState([]);
  const [selectedPrato, setSelectedPrato] = useState(null);

  useEffect(() => {
    fetchPratos();
  }, []);

  async function fetchPratos() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(
      `https://alix-dweb.azurewebsites.net/api/PratosAPI?restauranteId=${restauranteId}`,
      requestOptions
    )
      .then(res => res.json())
      .then(result => {
        setListaPratos(result);
        console.log(listaPratos);
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  const handleAddToCart = prato => {
    setSelectedPrato(prato);

    // Add the selected prato to DetalhesPedidosAPI
    const newDetalhesPedido = {
      nomePrato: prato.nome,
      quantidade: 1, // Set the default quantity here
      preco: prato.preco
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newDetalhesPedido)
    };

    fetch('https://localhost:7101/api/DetalhesPedidosAPI', requestOptions)  // Replace with the correct API URL for DetalhesPedidosAPI
      .then(response => response.json())
      .then(data => {
        console.log('New DetalhePedido added:', data);
        // Perform any additional logic or update the UI as needed
      })
      .catch(error => {
        console.log('Error adding DetalhePedido:', error);
      });
  };

  const pratoItems = listaPratos.map(prato => (
    <div key={prato.nome} className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{prato.nome}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Preço: {prato.preco}</h6>
          <button className="btn btn-primary" onClick={() => handleAddToCart(prato)}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <h2>Pratos</h2>
      <div className="row">{pratoItems}</div>
    </div>
  );
}

export default Pratos;
