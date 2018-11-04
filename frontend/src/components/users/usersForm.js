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
    const newProject = {
      nome : this.state.nome,
      login: this.state.login,
      senha: this.state.senha,
   
    };
    this.props.createProject(newProject, this.props.history);
  }

render() {
    return (
    <div className="container">
      <h3 className="page-header">Cadastro Usuários</h3>
        <Form horizontal>
          <FormGroup controlId="formHorizontalNome" onSubmit={this.onSubmit}>
            <Col componentClass={ControlLabel} sm={2}>
              Nome
            </Col>
            <Col sm={10}>
              <FormControl type="text"  value={this.state.nome}
                      onChange={this.onChange} placeholder="Nome" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalLogin">
            <Col componentClass={ControlLabel} sm={2}>
              Login
            </Col>
            <Col sm={10}>
              <FormControl type="text"  value={this.state.login}
                      onChange={this.onChange} placeholder="Login" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalSenha">
            <Col componentClass={ControlLabel} sm={2}>
              Senha
            </Col>
            <Col sm={10}>
              <FormControl type="password"  value={this.state.senha}
                      onChange={this.onChange}placeholder="Senha" />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button className="btn btn-primary" type="submit" value="submit">Salvar</Button>
            </Col>
          </FormGroup>
        </Form>
    </div>
    );
  }
}

export default usersForm;