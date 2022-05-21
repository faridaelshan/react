import React from 'react'
import {MdFacebook} from 'react-icons/md'
import {RiInstagramFill} from 'react-icons/ri'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>




      <div className='d-flex'>
        <p>&copy; Copyright 2021, Kidz Wordpress Theme</p>
        <div className='ms-auto'>
        <button className='btn btn-white'><MdFacebook /></button>
        <button className='btn btn-white'><RiInstagramFill /></button>
        <button className='btn btn-white'><AiFillTwitterCircle /></button>
        <button className='btn btn-white'><FaYoutube /></button>
        </div>
    </div>
    </div>
    
  )
}

export default Footer