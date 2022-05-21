import React from 'react'
import Img from '../img/shop05.jpg'
import Img1 from '../img/shop07.jpg'
import Img2 from '../img/shop08.jpg'
import Img3 from '../img/shop09.jpg'

const DemosCarusel = () => {
  return (
      <>
      <div id="carouselExampleCaptions" className="carousel" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active bg-dark" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} className="bg-dark" aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} className="bg-dark" aria-label="Slide 3" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} className="bg-dark" aria-label="Slide 4" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Img3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-dark text-start mb-5 text-start mb-5">
              <h1 style={{fontWeight: "700"}} className='mb-5'>'Walter <br /> Whale' Chime <br /> Stuffed <br /> Animal</h1>
              <h4 style={{fontWeight: "700"}} className='mb-5'>TOYS</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Img} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-dark text-start mb-5">
              <h1 style={{fontWeight: "700"}} className='mb-5'>Bugaboo <br /> FOX</h1>
              <h4 style={{fontWeight: "700"}} className='mb-5'>STROLLERS</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Img1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-dark text-start mb-5">
              <h1 style={{fontWeight: "700"}} className='mb-5'>Makuba. <br /> Beech <br /> Lacquared</h1>
              <h4 style={{fontWeight: "700"}} className='mb-5'>ACTIVITY</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Img2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-dark text-start mb-5">
              <h1 style={{fontWeight: "700"}} className='mb-5'>Cute animal <br /> dogs puppy</h1>
              <h4 style={{fontWeight: "700"}} className='mb-5'>TOYS</h4>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-white" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-white" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </>
  )
}

export default DemosCarusel