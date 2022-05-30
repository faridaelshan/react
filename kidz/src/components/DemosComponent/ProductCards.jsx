import React, { useState } from 'react'
import { useCart } from 'react-use-cart';
import {BsFillBasket2Fill} from 'react-icons/bs'
import Data from '../../data/Data';



const ProductCardItems = props => {
    const {addItem} = useCart();
    return (
    <div className='col-12 col-sm-12 col-md-3'>
        <div className="card m-1" style={{"height":"340px"}}>
            <img src={props.img} className="card-img-top"  height="200" />
            <div className="card-body" style={{"height":"auto","paddingBottom":"0"}}>
              <p className="card-title" style={{"fontWeight":900}}>{props.title}</p>
              <h4 className="card-text text-info" style={{"fontWeight":900}}><span className='text-muted fs-5 mx-2' style={{"textDecorationLine":"line-through"}}>{props.sale}</span>${props.price}</h4>
            </div>
            <div>
              <button onClick={()=>addItem(props.item)} style={{"fontWeight":700}} className="btn btn-white text-info"><BsFillBasket2Fill className='mb-2'/>Add To Card</button>
            </div>
       </div>
    </div>
      
    )
}

const ProductCards = () => {
    const [carditems, setCarditems]=useState(<div className='row'>
    {Data.product.filter(item=>item.featured===true).map((item)=>{
        return(
            <ProductCardItems 
        title={item.title} 
        img={item.img} 
        price={item.price}
        sale={item.sale}
        item={item} 
        key={item.id}
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
                item={item} key={item.id}/>
                ) 
            })}
        </div>)
    }

    function saleClick(){
        setCarditems(<div className='row'>
            {Data.product.filter(item=>item.sales===true).map((item)=>{
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