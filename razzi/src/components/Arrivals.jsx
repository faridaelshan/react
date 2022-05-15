import React from 'react'
import { useCart } from 'react-use-cart';
import Data from '../data/Data';

const ProductItems = props => {
    const {addItem} = useCart();
    return (
      <div className="card col-12 col-sm-12 col-md-2 me-3 border-light" width="400">
      <img src={props.img} className="card-img-top"   height="200" alt="..." />
      <div className="card-body">
        <h6 className="card-title">{props.title}</h6>
        <p className="card-text">{props.price}$</p>
        <button onClick={()=>addItem(props.item)} className="btn btn-secondary">Add To Card</button>
      </div>
    </div>
    )
  }

const Arrivals = () => {
  return (
    <div className='mb-5'>
        <h2 className='text-center'>New Arrivals</h2>
        <div className='container'>
        <div className="d-flex" style={{"overflowX":"scroll","height":"400px"}}>
        {Data.productData.map((item,index)=>{
            return(
                <ProductItems img = {item.img} title={item.title} price = {item.price} item={item} key={index}/>
            )
        })}
 
        </div>
    </div>
    </div>
  )
}

export default Arrivals