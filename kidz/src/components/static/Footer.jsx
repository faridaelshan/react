import React from 'react'
import {MdFacebook} from 'react-icons/md'
import {RiInstagramFill} from 'react-icons/ri'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaYoutube} from 'react-icons/fa'
import logo from '../../img/logo.jpg'
import Data from '../../data/Data'


const Footercard =(props)=>{
  return(
    <div className="card mb-5 mt-5" style={{height: '0px',width:"400",backgroundColor:"transparent",border:"none"}}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={props.img} style={{height:"60px"}} className="img-fluid rounded-start mt-2" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h6 className="card-title">{props.title}</h6>
                    <p className="card-text fs-6"><span className='mx-2 text-muted' style={{"textDecorationLine":"line-through"}}>{props.sale}</span>${props.price}</p>
                  </div>
                </div>
              </div>
            </div>
  )
}

const Footer = () => {
  return (
    <footer>
      <div className='row m-0'>
        <div className='col-3'>
          <div className='d-flex flex-column p-5'>
            <img src={logo} width="120" alt="" />
            <p className='mt-5 text-muted'>
              555 California str,Suite 100 <br /> San Francisco, CA 94107 <br />1-800-312-2121 <br />1-800-310-1010
            </p>
            <p className=' text-muted'>example@domain.net</p>
          </div>
        </div>
        <div className='col-3'>
          <div className='d-flex flex-column p-5'>
          <h5 className='mb-5'>PRODUCTS</h5>
          <p className=' text-muted'>Simple Product</p>
          <p className=' text-muted'>Variable</p>
          <p className=' text-muted'>On Sale</p>
          <p className=' text-muted'>Out of Stock</p>
          <p className=' text-muted'>External Product</p>
          <p className=' text-muted'>Grouped</p>
          <p className=' text-muted'>Featured Video</p>
          </div>
        </div>
        <div className='col-3'>
          <div className='d-flex flex-column py-5'>
            <h5>PRODUCTS</h5>
            {Data.product.filter(item=>item.footerproduct===true).map((item)=>{
              return(
                <Footercard 
                title={item.title} 
                img={item.img} 
                price={item.price}
                sale={item.sale}
                item={item} key={item.id}/>
              )
            })}
          </div>
        </div>
        <div className='col-3'>
        <div className='d-flex flex-column py-5'>
            <h5>ON SALE</h5>
            {Data.product.filter(item=>item.footersale===true).map((item)=>{
              return(
                <Footercard 
                title={item.title} 
                img={item.img} 
                price={item.price}
                sale={item.sale}
                item={item} key={item.id}/>
              )
            })}
          </div>
        </div>
      </div>
      <div className='d-flex'>
        <p>&copy; Copyright 2021, Kidz Wordpress Theme</p>
        <div className='ms-auto'>
        <button className='btn btn-white'><MdFacebook /></button>
        <button className='btn btn-white'><RiInstagramFill /></button>
        <button className='btn btn-white'><AiFillTwitterCircle /></button>
        <button className='btn btn-white'><FaYoutube /></button>
        </div>
    </div>
    </footer>
    
  )
}

export default Footer