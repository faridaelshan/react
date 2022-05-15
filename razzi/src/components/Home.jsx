import React from 'react'
import Nav from './Nav'
import HomeSlide from './HomeSlide'
import ProductCategory from './ProductCategory'
import CategoryShop from './CategoryShop'
import Arrivals from './Arrivals'

const Home = () => {
  return (
    <>
    <HomeSlide />
    <CategoryShop />
    <ProductCategory />
    <Arrivals />
    </>
  )
}

export default Home