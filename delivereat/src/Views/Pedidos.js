import React, { Component } from 'react';

class Pedidos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pedidos: [], // Holds the array of Pedidos
    };
  }

  componentDidMount() {
    this.fetchPedidos();
  }

  fetchPedidos() {
    // Make an API request to fetch all Pedidos
    fetch('https://localhost:7101/api/PedidosAPI')
      .then(response => response.json())
      .then(data => {
        this.setState({ pedidos: data });
      })
      .catch(error => {
        console.log('Error fetching Pedidos:', error);
      });
  }

  addPedido() {
    const newPedido = {
      id: this.state.pedidos.length + 1, // Replace with the actual id
      confirmed: true, // Replace with the actual confirmed value
    };

    this.setState(prevState => ({
      pedidos: [...prevState.pedidos, newPedido],
    }));
  }

  render() {
    const { pedidos } = this.state;

    const pedidosElements = pedidos.map(pedido => (
      <div key={pedido.id} className='col-md-4 mb-4'>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Pedido id: {pedido.id}</h4>
            <h5 className="card-subtitle mb-2 text-muted">Confirmed: {pedido.confirmed.toString()}</h5>
            
          </div>
        </div>
      </div>
    ));

    return (
      <div>
        <h1>Pedidos</h1>
        <button onClick={() => this.addPedido()}>Add Pedido</button>
        <div className="row">{pedidosElements}</div>
      </div>
    );
  }
}

export default Pedidos;
