import React from 'react'
import homeslideimg0 from '../img/home_2_slider_1.jpg'
import homeslideimg1 from '../img/home_2_slider_2.jpg'
import homeslideimg2 from '../img/home_2_slider_3.jpg'

const HomeSlide = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active bg-danger rounded-circle" aria-current="true" style={{width: '1rem'}} aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" style={{width: '1rem'}} className=' rounded-circle bg-danger' />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" style={{width: '1rem'}} className=' rounded-circle bg-danger' />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={homeslideimg0} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-start">
              <h1 className='text-dark text-start'>Summer Sale</h1>
              <h1 className='text-danger text-start' style={{fontSize: '8rem'}}>-70%</h1>
              <h5 className='text-dark text-start'>with promo code CN67EW*</h5>
              <button type="button" className="btn btn-dark ">Shop Now &rarr;</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={homeslideimg1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-end mb-5 pb-5">
              <h1 className='text-dark text-end'>Summer collection</h1>
              <h5 className='text-dark text-end'>So called give, one whales tree seas dry place own <br /> day, winged tree created spirit.</h5>
              <button type="button" className="btn btn-dark mb-5">Shop Now &rarr;</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={homeslideimg2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block mb-5">
              <h5 className='text-light'>Summer Styles</h5>
              <h1 className='text-light' style={{fontSize: '8rem'}}>50% OFF</h1>
              <div className='d-flex justify-content-center mb-5'>
              <button type="button" className="btn text-light">Shop Womens</button>
              <button type="button" className="btn text-light">Shop Mens</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HomeSlide