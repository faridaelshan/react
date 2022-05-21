import React from 'react'
import { Link } from 'react-router-dom'
import Data from '../data/Data'

const Buttons =(props)=>{
  return(
    <button className='btn brn-light'><Link to={props.link}><img src={props.img} /></Link></button>
  )
}

const ButtonsCarusel = () => {
  return (
      <div className='d-flex' style={{"backgroundColor":"rgb(244, 248, 255)"}}>
        <div className='container'>
        {Data.buttondata.map((item,index)=>{
           return(
             <Buttons key={index} link={item.link} img={item.img}/>
           )
         })}
        </div>
      </div>
  )
}

export default ButtonsCarusel