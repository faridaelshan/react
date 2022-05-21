import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Footer from '../components/static/Footer'
import Nav from '../components/static/Nav'
import Header from '../components/static/Header'
import Demos from '../components/pages/Demos'
import Shop from '../components/pages/Shop'
import Product from '../components/pages/Product'
import Blog from '../components/pages/Blog'
import Pages from '../components/pages/Pages'
import Basket from '../components/Basket'
import Kids from '../components/Kids'
import Bitmap from '../components/Bitmap'
import Tiger from '../components/Tiger'
import Usa from '../components/Usa'
import Bake from '../components/Bake'
import Pelican from '../components/Pelican'
import Group from '../components/Group'
import Contact from '../components/Contact'

const Router = () => {
  return (
    <BrowserRouter>
    <Nav />
    <Header />
    <Switch>
      <Route component={Demos} exact path="/"></Route>
      <Route component={Basket} exact path="/cart"></Route>
      <Route component={Shop} path="/shop"></Route>
      <Route component={Product} path="/product"></Route>
      <Route component={Blog} path="/blog"></Route>
      <Route component={Pages} path="/pages"></Route>
      <Route component={Kids} path="/kids"></Route>
      <Route component={Bitmap} path="/bitmap"></Route>
      <Route component={Tiger} path="/tiger"></Route>
      <Route component={Usa} path="/usa"></Route>
      <Route component={Bake} path="/bake"></Route>
      <Route component={Pelican} path="/pelican"></Route>
      <Route component={Group} path="/group"></Route>
      <Route component={Contact} path="/contact"></Route>
    </Switch>
    <Footer />
    </BrowserRouter>
  )
}

export default Router