import React from "react";
import { Navbar, NavItem, Row, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'


const Header = () => (
<Navbar inverse collapseOnSelect>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        <h4>Palacio das Ferramentas</h4>
      </NavItem>

      
    </Nav>
      <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Fornecedor
      </NavItem>
      <NavItem eventKey={2} href="#">
        Produtos
      </NavItem>
       <NavItem eventKey={2} href="#">
        Usuarios
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    
);

export default Header;