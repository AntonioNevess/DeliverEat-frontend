import React, { Component } from 'react';

class DetalhesPedidos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      DetalhesPedidos: [], // Array to store the DetalhesPedidos
    };
  }

  componentDidMount() {
    this.fetchDetalhesPedidos();
  }

  fetchDetalhesPedidos() {
    fetch('https://localhost:7101/api/DetalhesPedidosAPI')
      .then(response => response.json())
      .then(data => {
        this.setState({ DetalhesPedidos: data });
      })
      .catch(error => {
        console.log('Error fetching DetalhesPedidos:', error);
      });
  }

  addDetalhesPedido() {
    const newDetalhesPedido = {
      id: this.state.DetalhesPedidos.length + 1,
      confirmed: true,
    };

    this.setState(prevState => ({
      DetalhesPedidos: [...prevState.DetalhesPedidos, newDetalhesPedido],
    }));
  }

  render() {
    const { DetalhesPedidos } = this.state;

    const detalhesPedidosElements = DetalhesPedidos.map(pedido => (
      <div key={pedido.id} className='col-md-4 mb-4'>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{pedido.nomePrato}</h4>
            <h5 className="card-subtitle mb-2 text-muted">Preço: {pedido.preco}</h5>
            <h5 className="card-subtitle mb-2 text-muted">Quantidade: {pedido.quantidade}</h5>   
          </div>
        </div>
      </div>
    ));

    return(
<div>
        <h1>DetalhesPedidos</h1>
        <button onClick={() => this.addDetalhesPedido()}>Adicionar Pedidos</button>
        <div className="row">{detalhesPedidosElements}</div>    
</div>
    ) ;
}}

export default DetalhesPedidos;
