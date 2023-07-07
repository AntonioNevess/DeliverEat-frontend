import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Pratos() {
  const { restauranteId } = useParams();
  const [listaPratos, setListaPratos] = useState([]);

  useEffect(() => {
    fetchPratos();
  }, []);

  async function fetchPratos() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(
      `https://localhost:7101/api/PratosAPI?restauranteId=${restauranteId}`,
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

  const pratoItems = listaPratos.map(prato => (
    <div key={prato.nome} className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{prato.nome}</h5>
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
