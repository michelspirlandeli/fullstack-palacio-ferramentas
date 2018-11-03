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

delete = (idfornecedores) => {
    instance.delete('/fornecedores/' + idfornecedores)
}

render() {
  
    const { fornecedores } = this.state;
    
    return (
      
    <div className="container">
      <div className="table-responsive">
        <div className="col-md-12">
            <a href="/FornecedoresForm" className="btn btn-primary pull-right h2">Novo Item</a>
        </div>
        
        <h3 className="page-header">Fornecedores</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">RAZAOSOCIAL</th>
              <th scope="col">NOMEFANTASIA</th>
              <th scope="col">RUA</th>
              <th scope="col">NUMERO</th>
              <th scope="col">BAIRRO</th>
              <th scope="col">CIDADE</th>
              <th scope="col">TELEFONE</th>
              <th scope="col">EMAIL</th>
              <th scope="col">CNPJ</th>
              <th scope="col">OPÇÕES</th>
            </tr>
          </thead>
          <tbody>
          {fornecedores.map(fornecedor => (
            <tr>
              <td>{fornecedor.idfornecedores}</td>
              <td>{fornecedor.razao_social}</td>
              <td>{fornecedor.nome_fantasia}</td>
              <td>{fornecedor.rua}</td>
              <td>{fornecedor.numero}</td>
              <td>{fornecedor.bairro}</td>
              <td>{fornecedor.cidade}</td>
              <td>{fornecedor.telefone}</td>
              <td>{fornecedor.email}</td>
              <td>{fornecedor.cnpj}</td>
              <td>
                <button className="btn btn-primary">Editar</button>
                <button className="btn btn-danger" onClick={() => this.delete(fornecedor.idfornecedores)} >Delete</button>
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

