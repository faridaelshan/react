import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import {BsBagX} from 'react-icons/bs'
import {RiScissorsCutFill} from "react-icons/ri"

const Basket = () => {
    const{
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem
    }=useCart();

    if(isEmpty)return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
        <h1 style={{"fontSize":"70px"}}>Cart</h1>
        <BsBagX className='m-5' style={{"fontSize":"100px"}}/>
        <h3 className='text-center'>Your cart is currently empty.</h3>
        <button className='btn btn-primary mb-5'><Link to="/shop" className='text-decoration-none text-white'>Return to shop</Link></button>
    </div>
    )

  return (
    <section className='row p-0 m-0'>
        <div className='col-7'>
            <ul className="list-group list-group-flush ps-5 ms-5">
              <li className="list-group-item text-muted d-flex row" style={{"fontSize":"12px"}}>
                  <div className='col-9'>PRODUCT</div>
                  <div className='col-2'>QUANTITY</div>
                  <div className='col-1'>SUBTOTAL</div>
                </li>
              {items.map((item)=>{
                return(
                    <li className="row" key={item.id}>
                        <div className='col-1'>
                        <button className="btn btn-white ms-2" onClick={()=>{removeItem(item.id)}}>x</button>
                        </div>
                       
                            <div className='col-2'>
                            <img src={item.img} style={{height:"6rem"}} />
                            </div>
                            <div className='col-5 d-flex flex-column'>
                                <h6>{item.title}</h6>
                                <p style={{"fontWeight":"700"}}>${item.price}</p>
                            </div>
                            <div className='col-3'>
                            <div className='border border-secondary rounded d-flex mt-3' style={{"height":"50px","width":"120px"}}>
                            <button className='btn btn-white text-muted fs-4' onClick={()=>updateItemQuantity(item.id, item.quantity -1)}>-</button>
                            <button className='btn btn-white fs-4'>{item.quantity}</button>
                            <button className='btn btn-white text-muted fs-4' onClick={()=>updateItemQuantity(item.id, item.quantity +1)}>+</button>
                            </div>
                            </div>
                            
                            <span className='text-danger col-1 fs-3' style={{"fontWeight":"700"}}>${item.quantity*item.price}</span>
                        
                    </li>
                )})}
            </ul>
        </div>
        <div className='col-4'>
            <form className='p-3' style={{"width":"90%","marginLeft":"20%","backgroundColor":"rgb(244, 248, 255)"}}>
                <div>
                    <button style={{"backgroundColor":"transparent"}} className="btn dropdown-toggle d-flex justfy-content-evenly align-items-center">
                    <RiScissorsCutFill /> COUPON CODE
                    </button>
                    <form className="p-4 d-flex">
                      <input type="text" className="form-control" style={{"width":"150px"}} placeholder="Coupon code" />
                      <button type="submit" className="btn btn-primary">Apply coupon</button>
                    </form>
                </div>
                    <hr />
                <div className='d-flex'>
                    <p className='text-muted'>SUBTOTAL</p>
                    <p className='ms-auto'>${cartTotal}</p>
                </div>
                <hr />
                <div className=''>
                    <h4>SHIPPING</h4>
                    <div className='row'>
                        <div className='col-8'>
                        <input type="radio" name="shipping" id="" />
                        <label>Flat rate:</label>
                        </div>
                        <p className='col-4'>$35</p>
                    </div>
                    <input type="radio" name="shipping" id="" />
                    <label>Free shipping</label>
                    <p className='mt-3'>Shipping to <b>CA.</b></p>
                </div>
                <hr />
                <div className='d-flex'>
                    <p className='text-muted'>TOTAL</p>
                    <h2 style={{"fontWeight":"900"}} className='ms-auto text-danger'>${cartTotal}</h2>
                </div>
                <div className='d-flex  flex-column'>
                    <button type="submit" className='btn btn-danger'>Checkout</button>
                </div>
            </form>
       </div>

    </section>
  )
}

export default Basket