import React from 'react'
import {MdFacebook} from 'react-icons/md'
import {RiInstagramFill} from 'react-icons/ri'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaYoutube} from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaSearch} from 'react-icons/fa'
import {BsFillBasket2Fill} from 'react-icons/bs'
import {MdOutlinePedalBike} from 'react-icons/md'
import {BiBath} from 'react-icons/bi'
import {MdEventSeat} from 'react-icons/md'
import {FaBabyCarriage} from 'react-icons/fa'
import {GiBabyBottle} from 'react-icons/gi'
import {GiClothes} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart';


const Header = () => {
  const{totalItems}=useCart(); 
  return (
      <div className='d-flex flex-column header'>
        <div className='d-flex justify-content-around mt-2'>
         <div className='d-flex justify-content-center'>
             <MdFacebook style={{fontSize: "30"}}/>
             <RiInstagramFill style={{fontSize: "30"}}/>
             <AiFillTwitterCircle style={{fontSize: "30"}}/>
             <FaYoutube style={{fontSize: "30"}}/>
         </div>
         <div>
         <svg width="153" height="49" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#93C240" d="M1.617 1.937l15.191-.97.194 11.838 11.726-9.43 9.9 8.421-14.44 12.145L38.53 38.786 27.298 48.44 17.149 36.748V47.86L.947 47.722z"/><path fill="#FFB74A" d="M41.838 2.188L59.582.873l-.437 46.922-16.63-.065z"/><path fill="#FF5B4B" d="M110.3.335l-1.228 16.16 16.647.195-15.378 17.712-.493 13.275 42.592-.21.194-14.813-19.735-.2 19.443-16.025V.527z"/><path d="M63.853 3.04l.97 14.53 5.06-.582.524 30.001s5.128.115 16.694.115c11.566 0 20.519-11.03 20.128-24.496C106.84 9.142 95.872.891 86.284.891c-9.589 0-22.431 2.15-22.431 2.15zm19.126 11.937l.628 16.652s9.716 1.194 9.877-8.176c.162-9.37-10.505-8.476-10.505-8.476z" fill="#FF8A4D"/></g></svg>
         </div>
         <div>
             <button className='btn btn-white'><Link style={{"color":"black"}} to="/wish"><AiOutlineHeart style={{fontSize: "25"}}/></Link></button>
             <button className='btn btn-white'><FaSearch style={{fontSize: "25"}}/></button>
             <button className='btn btn-white position-relative'> <Link style={{"color":"black"}} to="/cart"><BsFillBasket2Fill style={{fontSize: "25"}}/><span className="position-absolute start-80 translate-middle badge rounded-pill bg-danger">{totalItems}<span className="visually-hidden">unread messages</span></span></Link></button>
         </div>
       </div>
       <div className='d-flex justify-content-center'>
          <div className="d-flex flex-column m-5">
              <MdOutlinePedalBike style={{fontSize: "40"}}/>
              <br />
               ACTIVITY
          </div>
          <div className="d-flex flex-column m-5">
              <BiBath style={{fontSize: "40"}}/>
              <br />
            BATH
          </div>
          <div className="d-flex flex-column m-5">
              <MdEventSeat style={{fontSize: "40"}}/>
              <br />
            CAR SEATS
          </div>
          <div className="d-flex flex-column m-5">
              <GiClothes style={{fontSize: "40"}}/>
              <br />
            CLOTHING
          </div>
          <div className="d-flex flex-column m-5">
              <GiBabyBottle style={{fontSize: "40"}}/>
              <br />
            FEEDING
          </div>
          <div className="d-flex flex-column m-5">
              <FaBabyCarriage style={{fontSize: "40"}}/>
              <br />
            STROLLERS
          </div>
       </div>
      </div>
    
  )
}

export default Header