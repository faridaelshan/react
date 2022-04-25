import React from 'react'
import { useCart } from 'react-use-cart'

const Productitems = (props) => {
  const{addItem}=useCart();
  return (
    <div className='col-12 col-sm-12 col-md-3 my-3 py-0'>
      <div className="card border-white">
         <img src={props.img} className="card-img-top p-2" style={{"width":"190px"}} alt="..." />
         <div className="card-body">
           <h5 className="card-title">{props.title}</h5>
           <p className="card-text">{props.desc}</p>
           <p>${props.price}</p>
           <p><span className='text-muted'>Vendor: </span>{props.vendor}</p>
           <div className='d-flex mb-1'>
             <button onClick={()=>addItem(props.item)}>Basket</button>
             {/* <button>1</button>
             <button>4</button>
             <button>3</button> */}
           </div>
         </div>
      </div>
    </div>
  )
}

export default Productitems