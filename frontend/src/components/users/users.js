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

delete = (idusuario) => {
  instance.delete('/users/' + idusuario)
  window.location.href = 'http://localhost:3000/users'
}

render() {
  
    const { users } = this.state;
    
return (
      
    <div className="container">
      <div className="table-responsive">
      
        <div className="col-md-12">
            <a href="/usersForm" className="btn btn-primary pull-right h2">Novo Item</a>
        </div>
        
        <h3 className="page-header">Usuarios</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">NOME</th>
              <th scope="col">LOGIN</th>
              <th scope="col">SENHA</th>
              <th scope="col">OPÇÕES</th>
            </tr>
          </thead>
          <tbody>
          {users.map(user => (
            <tr>
              <td>{user.idusuario}</td>
              <td>{user.nome}</td>
              <td>{user.login}</td>
              <td>{user.senha}</td>
              <td>
                <button className="btn btn-primary">Editar</button>
                <button className="btn btn-danger" onClick={() => this.delete(user.idusuario)}  >Delete</button>
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
