import React from "react";
import { Button, FormGroup, FormControl, ControlLabel, Col, Form } from 'react-bootstrap';
import './style.css'

class fornecedoresForm extends React.Component {

  constructor(props, context) {
    super(props, context);
    
    this.state = {
      razao_social : '',
      nome_fantasia: '',
      rua          : '',
      numero       : '',
      bairro       : '',
      cidade       : '',
      telefone     : '',
      email        : '',
      cnpj         : ''
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
       razao_social : this.state.razao_social,
       nome_fantasia: this.state.nome_fantasia,
       rua          : this.state.rua,
       numero       : this.state.numero,
       bairro       : this.state.bairro,
       cidade       : this.state.cidade,
       telefone     : this.state.telefone,
       email        : this.state.email,
       cnpj         : this.state.cnpj,
   
    };
    
  }
salvar = async () => {
    const {fornecedores} = this.state;
    await instance.post("/fornecedores")
    window.location.href = "/fornecedores"
}


  render() {
    return (

     <div className="container">
      <h3 className="page-header">Cadastro Fornecedores</h3>
        <Form horizontal onSubmit={this.onSubmit}>
        <div class="form-group">
         <label>Razão Social: </label>
            <input  type="text" className="form-control" name="razaosocial" value={this.setState.razao_social} placeholder="Razão Social" />
        </div>
        <div class="form-group">
           <label>Nome Fantasia: </label>
            <input type="text" className="form-control" name="nome_fantasia" value={this.setState.nome_fantasia} placeholder="Nome Fantasia"/>
        </div>
        <div class="form-group">  
           <label>Rua: </label>
            <input type="text" className="form-control" name="rua" value={this.setState.rua} placeholder="Rua"/>
        </div>
        <div class="form-group">  
           <label>Número: </label>
            <input type="text" className="form-control" name="numero" value={this.setState.numero} placeholder="Número"/>
        </div>
        <div class="form-group">  
           <label>Bairro: </label>
            <input type="text" className="form-control" name="bairro" value={this.setState.bairro} placeholder="Bairro"/>
        </div>
        <div class="form-group">  
           <label>Cidade: </label>
            <input type="text" className="form-control" name="cidade" value={this.setState.cidade} placeholder="Cidade"/>
        </div>
        <div class="form-group">  
           <label>Telefone: </label>
            <input type="text" className="form-control" name="telefone" value={this.setState.telefone} placeholder="Telefone"/>
        </div>
         <div class="form-group">  
           <label>Email: </label>
            <input type="text" className="form-control" name="email" value={this.setState.email} placeholder="Email"/>
        </div>
         <div class="form-group">  
           <label>CNPJ: </label>
            <input type="text" className="form-control" name="cnpj" value={this.setState.cnpj} placeholder="Cnpj"/>
        </div>
          <button className="btn btn-primary"  type="submit" value="Salvar" >Salvar</button>
        </Form>
    </div>
  
    );
  }
}

export default fornecedoresForm;