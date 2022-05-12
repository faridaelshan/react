import React from 'react';
import { useCart } from 'react-use-cart';


const ProductItems = props => {
  const {addItem} = useCart();
  return (
    <div className="card col-12 col-sm-12 col-md-2" >
    <img src={props.img} className="card-img-top" width="300"  height="200" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.price}$</p>
      <button onClick={()=>addItem(props.item)} className="btn btn-primary">Add To Card</button>
    </div>
  </div>
  )
}

export default ProductItems