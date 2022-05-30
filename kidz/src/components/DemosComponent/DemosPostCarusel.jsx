import React from 'react'
import {ImQuotesLeft} from 'react-icons/im'
import Postcaruselbg from '../../img/postcaruselbg.jpg'
import Postavatar0 from '../../img/postavatar0.jpg'
import Postavatar1 from '../../img/postavatar1.jpg'
import Postavatar2 from '../../img/postavatar2.jpg'

const DemosPostCarusel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Postcaruselbg} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block mb-5">
            <ImQuotesLeft />
              <p>I STRONGLY recommend KIDZ Baby Store to EVERYONE interested in running 
                  a successful online business! It's incredible. Best. Product. Ever!
                   KIDZ Baby Store was worth a fortune to my company</p>
                   <img className='rounded-circle' src={Postavatar0} />
                   <h6>-MAIR Q.</h6>
                   <p>Dover, North Carolina</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Postcaruselbg} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block mb-5">
            <ImQuotesLeft />
              <p>Very easy to use. I love your system. Definitely worth the investment. Buy this now.</p>
              <img className='rounded-circle'  src={Postavatar1} />
              <h6>-NEELY E.</h6>
                   <p>Whippleville, New York</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Postcaruselbg} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block mb-5">
            <ImQuotesLeft />
              <p>I made back the purchase price in just 48 hours! You guys rock!</p>
              <img className='rounded-circle' src={Postavatar2} />
              <h6>-MELONY A.</h6>
                   <p>Faifax, Washington DC</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
}

export default DemosPostCarusel