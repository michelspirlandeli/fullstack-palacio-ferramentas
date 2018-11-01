import React from "react";
import ReactDOM from 'react-dom';
import Forncedores from "./components/fornecedores/fornecedores";
import Products from "./components/products/products";
import Users from "./components/users/users";

// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>

      <Switch>
        <Route path='/fornecedores' component={Forncedores}/>
        <Route path='/products' component={Products}/>
        <Route path='/users' component={Users}/>
      </Switch>
    
  </main>  
);

export default Main;