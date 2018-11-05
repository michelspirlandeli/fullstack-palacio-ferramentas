import React from "react";
import { Button, FormGroup, FormControl, ControlLabel, Col, Form } from 'react-bootstrap';
import './style.css'

class productForm extends React.Component {
  

  constructor(props, context) {
    super(props, context);
    
    this.state = {
      fornecedor: '',
      nome      : '',
      descricao : '',
      quantidade: '',
      valor     : ''
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
      fornecedor: this.state.fornecedor,
      nome      : this.state.nome,
      descricao : this.state.descricao,
      quantidade: this.state.quantidade,
      valor     : this.state.valor
   
    };
    
  }
salvar = async () => {
    const {product} = this.state;
    await instance.post("/products")
    window.location.href = "/products"
}


render() {
  
    return (
     <div className="container">
      <h3 className="page-header">Cadastro Produtos</h3>
        <Form horizontal onSubmit={this.onSubmit}>
        <div class="form-group">
         <label>Fornecedor: </label>
            <input  type="text" className="form-control" name="fornecedor" value={this.setState.fornecedor} placeholder="Fornecedor" />
        </div>
        <div class="form-group">
           <label>Nome: </label>
            <input type="text" className="form-control" name="nome" value={this.setState.nome} placeholder="Nome"/>
        </div>
        <div class="form-group">  
           <label>Descrição: </label>
            <input type="text" className="form-control" name="descricao" value={this.setState.descricao} placeholder="Descrição"/>
        </div>
         <div class="form-group">  
           <label>QTD: </label>
            <input type="text" className="form-control" name="quantidade" value={this.setState.quantidade} placeholder="Quantidade"/>
        </div>
         <div class="form-group">  
           <label>Valor: </label>
            <input type="text" className="form-control" name="valor" value={this.setState.valor} placeholder="Valor"/>
        </div>
          <button className="btn btn-primary"  type="submit" value="Salvar" >Salvar</button>
        </Form>
    </div>
  
    );
  }
}

export default productForm;