import React from 'react';
import { Link } from 'react-router-dom';

class Restaurantes extends React.Component {
  state = {
    listaRestaurantes: [],
    show: false,
    novoRestaurante: { Nome: '', Descricao: '' }
  };

  // Executa quando o componente é montado
  async componentDidMount() {
    this.fetchRestaurantes();
  }

  // Configurações da solicitação
  async fetchRestaurantes() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    // Faz uma solicitação GET para a API para buscar a lista de restaurantes
    fetch('https://alix-dweb.azurewebsites.net/api/RestaurantesAPI', requestOptions)
      .then(res => res.json()) // Converte a resposta para JSON
      .then(result =>
        this.setState({ listaRestaurantes: result }, () =>
          console.log(this.state.listaRestaurantes)
        )
      )
      .catch(error => {
        console.log('error', error);
      });
  }

  async createRestaurantes() {
    console.log('Criar Restaurante!');
    let obj = { Name: this.state.novoRestaurante.Nome };
    console.log(obj);
    console.log(JSON.stringify(obj));
    const requestOptions = {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(obj)
    };

    // Faz uma solicitação POST para a API para criar um novo restaurante
    fetch('https://alix-dweb.azurewebsites.net/api/RestaurantesAPI/create', requestOptions)
      .then(res => res.json()) // Converte a resposta para JSON
      .then(result =>
        this.setState({ listaRestaurantes: result }, () =>
          console.log(this.state.listaRestaurantes)
        )
      )
      .catch(error => {
        console.log('error', error);
      });
  }

  render() {
    let lista = [];

    // Itera sobre a lista de restaurantes e cria os elementos de cartão
    this.state.listaRestaurantes.forEach(restaurante =>
      lista.push(
        <div key={restaurante.nome} className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{restaurante.nome}</h5>
              <Link
                to={`/pratos/${restaurante.id}`}
                className="btn btn-primary"
              >
                Ver Pratos
              </Link>
            </div>
          </div>
        </div>
      )
    );

    return (
      <div>
        <h2>Restaurantes</h2>
        <div className="row">{lista}</div>
      </div>
    );
  }
}

export default Restaurantes;
