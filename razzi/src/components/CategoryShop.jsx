import React from 'react'
import Data from '../data/Data'


const ShopItem = (props) => {
  return(
    <div className="card bg-light text-dark" style={{width: '25rem'}}>
        <img src={props.img} className="card-img" alt="..." />
        <div className="card-img-overlay mt-5">
          <h4 className="card-title ms-2">{props.title}</h4>
          <button type="button" className="btn"><h6>Shop Now &rarr;</h6></button>
        </div>
      </div>
  )
}
const CategoryShop = () => {
  return (
  <div className='d-flex justify-content-evenly mt-3'>
    {Data.categoyshop.map((item,index)=>{
      return(
        <ShopItem title={item.title} img={item.img} key={index}/>
      )
    })}
      
  </div>
    
  )
}

export default CategoryShop