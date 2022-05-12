import React from 'react';
import data from './data'
import ProductItems from './ProductItems';

const product = () => {
  return (
    <div className='container'>
        <div className="row">
        {data.productData.map((item,id)=>{
            return(
                <ProductItems img = {item.img} title={item.title} price = {item.price} key={id}/>
            )
        })}
 
        </div>
    </div>
  )
}

export default product