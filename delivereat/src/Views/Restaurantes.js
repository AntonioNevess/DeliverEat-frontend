import React from 'react';
import { Link } from 'react-router-dom';


class Restaurantes extends React.Component {

    state = { listaRestaurantes: [], show: false, novoRestaurante: {Nome:"", Descricao:""} }

    async componentDidMount() {
        this.fetchRestaurantes();
    }

    async fetchRestaurantes() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    
        fetch("https://localhost:7100/api/RestaurantesAPI", requestOptions)
            .then(res => res.json())
            .then(result => this.setState({ listaRestaurantes : result }, () => console.log(this.state.listaRestaurantes)))
            .catch(error => { console.log('error', error) });
    }

    async createRestaurantes() {
        console.log("Criar Restaurante!");
        let obj = {Name: this.state.novoRestaurante.Nome};
        console.log(obj);
        console.log(JSON.stringify(obj));
        var requestOptions = {
            method: 'POST',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(obj)
        };

        fetch("https://localhost:7100/api/RestaurantesAPI/create", requestOptions)
            .then(res => res.json())
            .then(result => this.setState({ listaRestaurantes : result }, () => console.log(this.state.listaRestaurantes)))
            .catch(error => { console.log('error', error) });
    }

    

    render() {
        let lista = [];

        this.state.listaRestaurantes.forEach(restaurante => lista.push(
            <div key={restaurante.nome} className="col-md-4 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{restaurante.nome}</h5>
                        <Link to={`/pratos/${restaurante.id}`} className="btn btn-primary">
                            Ver Pratos
                        </Link>
                    </div>
                </div>
            </div>

        ));

        return (
            <div>
                <h2>Restaurantes</h2>
                <div className="row">
                    {lista}
                </div>
            </div>
        );
    }
}

export default Restaurantes;
