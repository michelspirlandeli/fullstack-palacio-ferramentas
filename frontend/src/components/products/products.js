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

  render() {
    const { products } = this.state;
    return (
      
      <div className="container">
        <div className="table-responsive">
          <div className="col-md-12">
                   <a href="add.html" class="btn btn-primary pull-right h2">Novo Item</a>

          </div>
          <h3 class="page-header">Produtos</h3>
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
              {products.map(product => (
                <tr>
                  <td>{product.idproduto}</td>
                  <td>{product.nome}</td>
                  <td>{product.descricao}</td>
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
export default Products;

