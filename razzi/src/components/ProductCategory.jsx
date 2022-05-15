import React, {  useState } from 'react'
import Data from '../data/Data'
import CategoryCard from './CategoryCard';


const ProductCategory = () => {
    const [category, setCategory]=useState(<div className='d-flex justify-content-around'>
    {Data.womanCategoryCard.map((item,index)=>{
        return(
            <CategoryCard title={item.title} img={item.img} key={index}/>
        )
    })}
    </div>)
    function woman(){
        setCategory(<div className='d-flex justify-content-around'>
        {Data.womanCategoryCard.map((item,index)=>{
            return(
                <CategoryCard title={item.title} img={item.img} key={index}/>
            )
        })}
        </div>)
    }
    function man(){
        setCategory(<div className='d-flex justify-content-around'>
        {Data.manCategoryCard.map((item,index)=>{
            return(
                <CategoryCard title={item.title} img={item.img} key={index}/>
            )
        })}
        </div>)
    }
    function kid(){
        setCategory(<div className='d-flex justify-content-around'>
        {Data.kidCategoryCard.map((item,index)=>{
            return(
                <CategoryCard title={item.title} img={item.img} key={index}/>
            )
        })}
        </div>)
    }
  return (
    <div>
        <h2 className='text-center mt-5'>Shop By Category</h2>
        <ul className='d-flex justify-content-center'>
        <button onClick={woman} className='btn btn-light'>Woman</button>
        <button onClick={man} className='btn btn-light'>Man</button>
        <button onClick={kid} className='btn btn-light'>Kid</button>
        </ul> 
            {category}
    </div>
  )
}

export default ProductCategory