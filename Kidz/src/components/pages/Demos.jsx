import React from 'react'
import ButtonsCarusel from '../ButtonsCarusel'
import DemosCarusel from '../DemosCarusel'
import DemosCaruselCard from '../DemosCaruselCard'
import ProductCards from '../ProductCards'
import BlogPosts from '../BlogPosts'
import DemosPostCarusel from '../DemosPostCarusel'
import Footertext from '../Footertext'

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