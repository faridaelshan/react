import React from 'react'
import { Route } from 'react-router-dom'
import { BrowserRouter , Switch } from 'react-router-dom'
import Nav from '../components/Nav'
import product from '../components/product'
import Basket from '../components/Basket'

const Router = () => {
  return (
    <BrowserRouter>
    <Nav />
    <Switch>
      <Route component={product} path="/product"></Route>
      <Route component={Basket} path="/cart"></Route>
    </Switch>
    </BrowserRouter>
  )
}

export default Router