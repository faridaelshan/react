import React from 'react'
import ButtonsCarusel from '../DemosComponent/ButtonsCarusel'
import DemosCarusel from '../DemosComponent/DemosCarusel'
import DemosCaruselCard from '../DemosComponent/DemosCaruselCard'
import ProductCards from '../DemosComponent/ProductCards'
import BlogPosts from '../DemosComponent/BlogPosts'
import DemosPostCarusel from '../DemosComponent/DemosPostCarusel'
import Footertext from '../DemosComponent/Footertext'

const Demos = () => {
  return (
    <div>
        <DemosCarusel />
        <DemosCaruselCard />
        <ProductCards />
        <ButtonsCarusel />
        <BlogPosts />
        <DemosPostCarusel />
        <Footertext />
    </div>
  )
}

export default Demos