import React from "react";
import Forncedores from "./components/fornecedores/fornecedores";
import ForncedoresForm from "./components/fornecedores/fornecedoresForm";
import Products from "./components/products/products";
import ProductForm from "./components/products/productForm";
import Users from "./components/users/users";
import UsersForm from "./components/users/usersForm";
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>

      <Switch>
        <Route path='/fornecedores' component={Forncedores}/>
        <Route path='/fornecedoresForm' component={ForncedoresForm}/>
        <Route path='/products' component={Products}/>
        <Route path='/productForm' component={ProductForm}/>
        <Route path='/users' component={Users}/>
        <Route path='/usersForm' component={UsersForm}/>
      </Switch>
    
  </main>  
);

export default Main;