import React from "react";
import {instance} from '../../services/config';

import './style.css'

class Users extends React.Component {
    state = {
         users: [],
    };
    
    async componentDidMount() {
           const users = await instance.get('users')
           console.log(users);
           this.setState({ users: users.data })
    } 

  render() {
    const { users } = this.state;
    return (
      
     <div className="container">
  <div className="table-responsive">
  
    <div className="col-md-12">
        <a href="add.html" class="btn btn-primary pull-right h2">Novo Item</a>
    </div>
    <h3 class="page-header">Usuarios</h3>
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
      {users.map(user => (
        <tr>
          <td>{user.idusuario}</td>
        
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
export default Users;
