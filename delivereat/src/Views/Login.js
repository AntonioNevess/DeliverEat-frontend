import React, { Component } from 'react'

//O grupo composto por Dinis Silva e Francisco Silva ajudaram com a parte do login e Registo fornecendo código e ajudando a perceber como fazer

class Login extends Component {
    constructor(props) {
        super(props);
    }
    
    //iniciliazação do state
    state = { 
        login : {Email:"", Password:""}, //objeto para o login
        novaPessoa : {Nome:"", Email:"", Password:"", Telefone:"", Rua:"", CP:"", Localidade:""}, //objeto para criar nova pessoa
        listaPessoas: [], //array para guardar a lista de pessoas
    };

    //fetch para obter a lista de pessoas
    async componentDidMount() {
        this.fetchPessoas(); 
    }

    //fetch para obter a lista de pessoas
    async fetchPessoas() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
            
        fetch("https://alix-dweb.azurewebsites.net/api/PessoasAPI", requestOptions)
            .then(res => res.json())
            .then(result => this.setState({ listaPessoas : result }, () => console.log(this.state.listaPessoas)))
            .catch(error => { console.log('error', error) });
    }

    //handles para Registo
    HandleChange = (event) => {
        const { name, value } = event.target;
    
        this.setState(prevState => ({
            novaPessoa: { ...prevState.novaPessoa, [name]: value }
        }));
    }
    
    HandleSubmit = (event) => {
        event.preventDefault();
        const { novaPessoa } = this.state;
        console.log(novaPessoa);
        this.createPessoas(novaPessoa);

        this.setState({
            novaPessoa : {
            Nome:"", 
            Email:"", 
            Password:"", 
            Telefone:"", 
            Rua:"", 
            CP:"", 
            Localidade:""
        }});
    }

    //handles para Login
    HandleChangeLogin = (event) => {
        const { name, value } = event.target;
    
        this.setState(prevState => ({
            login: { ...prevState.login, [name]: value }
        }));
    }
    
    HandleSubmitLogin = (event) => {
        event.preventDefault();
        const { login } = this.state;
        console.log(login);
        this.loginPessoas(login);

        this.setState({
            login : {
            Email:"", 
            Password:"", 
        }});
    }

    //função para fazer o registo
    createPessoas(novaPessoa) {
        console.log("Criar Pessoa!");
        var requestOptions = {
            method: 'POST',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(novaPessoa)
        };

        //fetch para o registo
        fetch("https://alix-dweb.azurewebsites.net/api/PessoasAPI/create", requestOptions)
            .then(res => res.json())
            .then(result => { console.log(result);
                this.fetchPessoas();
            })
            .catch(error => { console.log('error', error) });
    }
    
    //função para login
    loginPessoas(obj) {
        var requestOptions = {
            method: 'POST',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(obj)
        };

        //fetch para o login
        fetch("https://alix-dweb.azurewebsites.net/api/PessoasAPI/login", requestOptions)
            .then(res => res.json())
            .then(result => { console.log(result);
                this.fetchPessoas();
            })
            .catch(error => { console.log('error', error) });
    }

    //função para logout
    logoutPessoas() {
        var requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
        };

        //fetch para logout
        fetch("https://alix-dweb.azurewebsites.net/api/PessoasAPI/logout", requestOptions)
            .then(res => res.json())
            .then(result => { console.log(result)})
            .catch(error => { console.log('error', error) });
    }

    render() {
        let novaPessoa = this.state.novaPessoa;
        let login = this.state.login;

        return (       
        <React.Fragment>
            <div className="row">
                <div className="col-md-6">
                    {/* Registo */}
                    <h3>Register</h3>
                    <form onSubmit={this.HandleSubmit}>
                        <div className="form-group">
                            <label htmlFor="registerName">Nome:</label>
                            <input
                                type="text"
                                id="registerName"
                                name="Nome"
                                value={novaPessoa.Nome}
                                onChange={this.HandleChange}
                                className="form-control"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="registerEmail">Email:</label>
                            <input
                                type="email"
                                id="registerEmail"
                                name="Email"
                                value={novaPessoa.Email}
                                onChange={this.HandleChange}
                                className="form-control"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="registerPassword">Password:</label>
                            <input
                                type="password"
                                id="registerPassword"
                                name="Password"
                                value={novaPessoa.Password}
                                onChange={this.HandleChange}
                                className="form-control"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="registerTelefone">Telefone:</label>
                            <input
                                type="text"
                                id="registerTelefone"
                                name="Telefone"
                                value={novaPessoa.Telefone}
                                onChange={this.HandleChange}
                                className="form-control"
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="registerRua">Rua:</label>
                            <input
                                type="text"
                                id="registerRua"
                                name="Rua"
                                value={novaPessoa.Rua}
                                onChange={this.HandleChange}
                                className="form-control"
                                placeholder="Enter your address"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="registerCP">CP:</label>
                            <input
                                type="text"
                                id="registerCP"
                                name="CP"
                                value={novaPessoa.CP}
                                onChange={this.HandleChange}
                                className="form-control"
                                placeholder="Enter your postal code"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="registerLocalidade">Localidade:</label>
                            <input
                                type="text"
                                id="registerLocalidade"
                                name="Localidade"
                                value={novaPessoa.Localidade}
                                onChange={this.HandleChange}
                                className="form-control"
                                placeholder="Enter your city"
                            />
                        </div>

            <button type="submit" className="btn btn-primary">
                Register
            </button>
        </form>
                </div>

                <div className="col-md-6">
                    {/* Login */}
                    <h3>Login</h3>
                    <form onSubmit={this.HandleSubmitLogin}>
                        <div className="form-group">
                            <label htmlFor="loginEmail">Email:</label>
                            <input
                                type="email"
                                id="loginEmail"
                                name="Email"
                                value={login.Email}
                                onChange={this.HandleChangeLogin}
                                className="form-control"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="loginPassword">Password:</label>
                            <input
                                type="password"
                                id="loginPassword"
                                name="Password"
                                value={login.Password}
                                onChange={this.HandleChangeLogin}
                                className="form-control"
                                placeholder="Enter your password"
                            />
                        </div>
                        {/* Add other login fields here */}
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </React.Fragment>
        );
    }
}

export default Login;