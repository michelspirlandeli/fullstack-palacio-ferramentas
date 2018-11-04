import React from "react";
import { Button, FormGroup, FormControl, ControlLabel, Col, Form } from 'react-bootstrap';
import './style.css'

class fornecedoresForm extends React.Component {
  
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
    <h3 className="page-header">Cadastro Fornecedores</h3>
    <Form horizontal>
    <FormGroup controlId="formHorizontalRazaoSocial">
      <Col componentClass={ControlLabel} sm={2}>
        Razão Social
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="Razão Social" />
      </Col>
    </FormGroup>
  
    <FormGroup controlId="formHorizontalNomeFantasia">
      <Col componentClass={ControlLabel} sm={2}>
        Nome Fantasia
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="Nome Fantasia" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalRua">
      <Col componentClass={ControlLabel} sm={2}>
        Rua
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="Rua" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalNumero">
      <Col componentClass={ControlLabel} sm={2}>
        Número
      </Col>
      <Col sm={10}>
        <FormControl type="number" placeholder="Número" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalBairro">
      <Col componentClass={ControlLabel} sm={2}>
        Bairro
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="Bairro" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalCidade">
      <Col componentClass={ControlLabel} sm={2}>
        Cidade
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="Cidade" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalTelefone">
      <Col componentClass={ControlLabel} sm={2}>
        Telefone
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="Telefone" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalCnpj">
      <Col componentClass={ControlLabel} sm={2}>
        CNPJ
      </Col>
      <Col sm={10}>
        <FormControl type="number" placeholder="CNPJ" />
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


export default fornecedoresForm;