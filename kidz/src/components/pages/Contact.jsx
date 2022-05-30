import React from 'react'
import {FiPhoneCall} from 'react-icons/fi'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsEnvelope} from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='contact'>
      <h1 className='text-center'>Contact Us</h1>
      <div className='d-flex justify-content-evenly'>
        <div className='d-flex'>
          <FiPhoneCall className='fs-1 m-2 text-info'/>
          <div className='d-flex flex-column ms-3'>
            <h6>Phones</h6>
            <p>1-800-312-2121</p>
          </div>
        </div>
        <div className='d-flex'>
          <BsEnvelope className='fs-1 m-2 text-info'/>
          <div className='d-flex flex-column ms-3'>
            <h6>Email</h6>
            <p>axample@domain.net</p>
          </div>
        </div>
        <div className='d-flex'>
          <HiOutlineLocationMarker className='fs-1 m-2 text-info'/>
          <div className='d-flex flex-column ms-3'>
            <h6>Address</h6>
            <p>555 California str, Suite 100 <br /> San Francisco, CA 94107</p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-6 p-5'>
          <form className='p-5'>
          <div>
        <div className="mb-3">
          <label for="formname" className="form-label"><small>YOUR NAME (REQUIRED)</small></label>
          <input type="text" className="form-control" id="formname" required/>
        </div>
        <div className="mb-3">
          <label for="formname" className="form-label"><small>YOUR EMAIL (REQUIRED)</small></label>
          <input type="email" className="form-control" id="formname" required/>
        </div>
        <div className="mb-3">
          <label for="message" className="form-label"><small>YOUR MESSAGE</small></label>
          <textarea className="form-control" id="message" rows={3} defaultValue={""} />
        </div>
      </div>
      <button className='btn-primary w-100'>Send</button>
          </form>
        </div>
        <div className='col-6'></div>
      </div>
    </div>
  )
}

export default Contact