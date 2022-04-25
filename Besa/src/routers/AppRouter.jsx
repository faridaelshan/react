import React from 'react'
import { Route } from 'react-router-dom'
import { BrowserRouter , Switch } from 'react-router-dom'
import Nav from '../components/static/Nav'
import Footer from '../components/static/Footer'
import Home from '../components/pages/Home'
import Product from '../components/pages/Product'
import Basket from '../components/pages/Basket'
import NotFoundPage from '../components/pages/NotFoundPage'
import Wishlist from '../components/pages/Wishlist'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Nav />
    <Switch>
      <Route component={Home} exact path="/"></Route>
      <Route component={Product} path="/product"></Route>
      <Route component={Basket} path="/cart"></Route>
      <Route component={Wishlist} path="/wish"></Route>
      <Route component={NotFoundPage}></Route>
    </Switch>
    <Footer />
    </BrowserRouter>
  )
}

export default AppRouter