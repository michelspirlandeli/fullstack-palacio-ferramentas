import React from "react";
import {instance} from '../../services/config';
import { Button, FormGroup, FormControl, ControlLabel, Col, Form } from 'react-bootstrap';
import './style.css'

class usersForm extends React.Component {

constructor(props, context) {
    super(props, context);
    
    this.state = {
      nome : '',
      login: '',
      senha: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const users = {
      nome : this.state.nome,
      login: this.state.login,
      senha: this.state.senha,
   
    };
    
  }
salvar = async () => {
    const {users} = this.state;
    await instance.post("/users")
    window.location.href = "/users"
}

render() {
    return (
    <div className="container">
      <h3 className="page-header">Cadastro Usuários</h3>
        <Form horizontal onSubmit={this.onSubmit}>
        <div class="form-group">
         <label>Nome: </label>
            <input  type="text" className="form-control" name="nome" value={this.setState.nome} placeholder="Nome" />
        </div>
        <div class="form-group">
           <label>Login: </label>
            <input type="text" className="form-control" name="login" value={this.setState.login} placeholder="Login"/>
        </div>
        <div class="form-group">  
           <label>Senha: </label>
            <input type="text" className="form-control" name="senha" value={this.setState.senha} placeholder="Senha"/>
        </div>
          <button className="btn btn-primary"  type="submit" value="Salvar" >Salvar</button>
        </Form>
    </div>
    );
  }
}

export default usersForm;