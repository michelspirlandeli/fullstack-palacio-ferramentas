import React from "react";
import Forncedores from "./components/fornecedores/fornecedores";
import Products from "./components/products/products";
import Users from "./components/users/users";
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