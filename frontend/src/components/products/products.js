import React from "react";
import {instance} from '../../services/config';

import './style.css'

class Products extends React.Component {
    state = {
         products: [],
         
    };
    
    async componentDidMount() {
           const products = await instance.get('products')
           console.log(products);
           this.setState({ products: products.data })
    } 

delete = (idprodutos) => {
  instance.delete('/products/' + idprodutos)
  // const products = await instance.get('/products')
  // this.setState({ products })
}
  render() {

    const { products } = this.state;
    return (
      
      <div className="container">
        <div className="table-responsive">
          <div className="col-md-12">
              <a href="add.html" className="btn btn-primary pull-right h2">Novo Item</a>
          </div>
          
          <h3 className="page-header">Produtos</h3>
            <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">NOME</th>
                <th scope="col">DESCRIÇÃO</th>
                <th scope="col">QTD</th>
                <th scope="col">VALOR</th>
                <th scope="col">OPÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr>
                  <td>{product.idprodutos}</td>
                  <td>{product.nome}</td>
                  <td>{product.descricao}</td>
                  <td>{product.quantidade}</td>
                  <td>{product.valor}</td>
                  <td>
                    <button className="btn btn-primary">Editar</button>
                    <button className="btn btn-danger" onClick={() => this.delete(product.idprodutos)} >Delete</button>
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
export default Products;



