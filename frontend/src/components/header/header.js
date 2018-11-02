import React from "react";
import { Navbar, NavItem, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

const Header = () => (
<Navbar inverse collapseOnSelect>
  <Navbar.Collapse>
    <Nav>
      <NavItem>
        <h4>Palácio das Ferramentas</h4>
      </NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem>
          <NavLink to="/">Home</NavLink>
      </NavItem>
      <NavItem>
          <NavLink to="fornecedores">Fornecedores</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="products">Produtos</NavLink>
      </NavItem>
       <NavItem>
          <NavLink to="users">Usuarios</NavLink>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    
);

export default Header;