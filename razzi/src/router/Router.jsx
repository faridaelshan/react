import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import Basket from '../components/Basket'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Router = () => {
  return (
    <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact component={Home} path="/"></Route>
      <Route component={Basket} path="/cart"></Route>
    </Switch>
    <Footer />
    </BrowserRouter>
  )
}

export default Router