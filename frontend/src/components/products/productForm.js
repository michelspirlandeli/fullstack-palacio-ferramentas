import React from "react";
import { Button, FormGroup, FormControl, ControlLabel, Col, Form } from 'react-bootstrap';
import './style.css'

class productForm extends React.Component {
  
constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

render() {
  
    return (
      
    <div className="container">
    <h3 className="page-header">Cadastro Produtos</h3>
    <Form horizontal>
     <FormGroup controlId="formHorizontalNome">
      <Col componentClass={ControlLabel} sm={2}>
        Fornecedor
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="Nome" />
      </Col>
    </FormGroup>
    
    <FormGroup controlId="formHorizontalNome">
      <Col componentClass={ControlLabel} sm={2}>
        Nome
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="Nome" />
      </Col>
    </FormGroup>
  
    <FormGroup controlId="formHorizontalDescricao">
      <Col componentClass={ControlLabel} sm={2}>
        Descrição
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="Descrição" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalQuantidade">
      <Col componentClass={ControlLabel} sm={2}>
        QTD
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="Quantidade" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalValor">
      <Col componentClass={ControlLabel} sm={2}>
        Valor
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="Valor" />
      </Col>
    </FormGroup>
  
    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button className="btn btn-primary" type="submit">Salvar</Button>
      </Col>
    </FormGroup>
  </Form>
      </div>
    );
  }
}


export default productForm;