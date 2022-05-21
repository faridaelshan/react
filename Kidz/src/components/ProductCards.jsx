import React, { useState } from 'react'
import { useCart } from 'react-use-cart';
import {BsFillBasket2Fill} from 'react-icons/bs'
import Data from '../data/Data';



const ProductCardItems = props => {
    const {addItem} = useCart();
    return (
        <div className='col-12 col-sm-12 col-md-3'>
            <div className="card m-1">
      <img src={props.img} className="card-img-top"   height="200" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h4 className="card-tex text-info" style={{"fontWeight":900}}><span>{props.sale}</span>${props.price}</h4>
        <button onClick={()=>addItem(props.item)} className="btn btn-light text-info"><BsFillBasket2Fill className='mb-2'/>  Add To Card</button>
      </div>
    </div>
        </div>
      
    )
}

const ProductCards = () => {
    const [carditems, setCarditems]=useState(<div className='row'>
    {Data.product.filter(item=>item.featured===true).map((item,index)=>{
        return(
            <ProductCardItems 
        title={item.title} 
        img={item.img} 
        price={item.price}
        sale={item.sale}
        item={item} 
        key={index}
        />
        ) 
    })}
</div>);

    function featuredClick(){
        setCarditems(<div className='row'>
            {Data.product.filter(item=>item.featured===true).map((item)=>{
                return(
                    <ProductCardItems 
                title={item.title} 
                img={item.img} 
                price={item.price}
                sale={item.sale}
                item={item} key={item.id}
                />
                ) 
            })}
        </div>)
    }

    function saleClick(){
        setCarditems(<div className='row'>
            {Data.product.filter(item=>item.sale===true).map((item)=>{
                return(
                    <ProductCardItems 
                title={item.title} 
                img={item.img} 
                price={item.price}
                sale={item.sale}
                item={item} key={item.id}
                />
                ) 
            })}
        </div>)
    }

    function bestsellerClick(){
        setCarditems(<div className='row'>
            {Data.product.filter(item=>item.bestseller===true).map((item)=>{
               return(
                <ProductCardItems 
            title={item.title} 
            img={item.img} 
            price={item.price}
            sale={item.sale}
            item={item} key={item.id}
            />
            ) 
            })}
        </div>)
    }
    
    function latestClick(){
        setCarditems(<div className='row'>
            {Data.product.filter(item=>item.latest===true).map((item)=>{
               return(
                <ProductCardItems 
            title={item.title} 
            img={item.img} 
            price={item.price}
            sale={item.sale}
            item={item} key={item.id}
            />
            ) 
            })}
        </div>)
    }

  return (
    <div className='container'>
        <div className='d-flex justify-content-center'>
            <button onClick={featuredClick} className='m-5 btn btn-outline-info text-info bg-light'>FEATURED</button>
            <button onClick={saleClick} className='m-5 btn btn-outline-info text-info bg-light'>ON A SALE</button>
            <button onClick={bestsellerClick} className='m-5 btn btn-outline-info text-info bg-light'>BESTSELLERS</button>
            <button onClick={latestClick} className='m-5 btn btn-outline-info text-info bg-light'>LATEST</button>
        </div>
        <div>
            {carditems}
        </div>
    </div>
  )
}

export default ProductCards