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
import Basket from '../components/pages/Basket'
import Kids from '../components/pages/Kids'
import Bitmap from '../components/pages/Bitmap'
import Tiger from '../components/pages/Tiger'
import Usa from '../components/pages/Usa'
import Bake from '../components/pages/Bake'
import Pelican from '../components/pages/Pelican'
import Group from '../components/pages/Group'
import Contact from '../components/pages/Contact'
import WishList from '../components/pages/WishList'
import Login from '../components/pages/Login'
import Register from '../components/pages/Register'
import Lost from '../components/pages/Lost'
import NotFound from '../components/pages/NotFound'
import BlogPostPage from '../components/pages/BlogPostPage'

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
      <Route component={WishList} path="/wish"></Route>
      <Route component={Login} path="/login"></Route>
      <Route component={Register} path="/register"></Route>
      <Route component={Lost} path="/lost"></Route>
      <Route component={BlogPostPage} path="/blogpage"></Route>
      <Route component={NotFound}></Route>
    </Switch>
    <Footer />
    </BrowserRouter>
  )
}

export default Router