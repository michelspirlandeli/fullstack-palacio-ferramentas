import React from "react";
import { Navbar, NavItem, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './style.css';

const Header = () => (
  
<Navbar inverse collapseOnSelect>
  <Navbar.Collapse>
    <Nav>
      <NavItem>
        <h4>Palácio das Ferramentas</h4>
      </NavItem>
    </Nav>
    <Nav pullRight >
      <NavItem>
          <NavLink className="header" to="/">Home</NavLink>
      </NavItem>
      <NavItem>
          <NavLink className="header" to="fornecedores">Fornecedores</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="header" to="products">Produtos</NavLink>
      </NavItem>
       <NavItem>
          <NavLink className="header" to="users">Usuários</NavLink>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    
);

export default Header;