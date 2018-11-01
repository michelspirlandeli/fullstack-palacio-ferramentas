import React from "react";
import {instance} from '../../services/config';

import './style.css'

class Fornecedores extends React.Component {
    state = {
         fornecedores: [],
    };
    
    async componentDidMount() {
           const fornecedores = await instance.get('fornecedores')
           console.log(fornecedores);
           this.setState({ fornecedores: fornecedores.data })
    } 

  render() {
    const { fornecedores } = this.state;
    return (
      
    <div className="container">
  <div className="table-responsive">
  
    <div className="col-md-12">
        <a href="add.html" class="btn btn-primary pull-right h2">Novo Item</a>
    </div>
    <h3 class="page-header">Fornecedores</h3>
      <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">NOME</th>
          <th scope="col">DESCRICAO</th>
          <th scope="col">QTD</th>
          <th scope="col">VALOR</th>
        </tr>
      </thead>
      <tbody>
      {fornecedores.map(fornecedor => (
        <tr>
          <td>{fornecedor.idfornecedor}</td>

          <td>
            <button className="btn btn-primary">Add</button>
            <button className="btn btn-danger" >Delete</button>
          </td>
        </tr>
        ))}
      </tbody>
    </table>
  </div>
</div> 
        );
    }
}
export default Fornecedores;

