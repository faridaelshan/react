import React from 'react'
import img5 from '../img/prod25.jpg' 
import img6 from '../img/prod31.jpg' 
import img7 from '../img/shop-21.jpg' 

const DemosCaruselCard = () => {
  return (
      <div className='row m-0'>
         <div className="card mb-3 col-4">
             <div className="row g-0">
                 <div className="col-md-6">
                   <div className="card-body">
                     <h5 className="card-title">Baby Jogger City Stroller</h5>
                     <p className="card-text">$250</p>
                     <button>SHOP NOW</button>
                   </div>
                 </div>
                 <div className="col-md-6">
                   <img src={img5} className="img-fluid rounded-start" alt="..." />
                 </div>
               </div>
          </div>
         <div className="card mb-3 col-4">
             <div className="row g-0">
                 <div className="col-md-6">
                   <div className="card-body">
                     <h5 className="card-title">Bodyguard Plus Baby Carseat</h5>
                     <p className="card-text">$450</p>
                     <button>SHOP NOW</button>
                   </div>
                 </div>
                 <div className="col-md-6">
                   <img src={img6} className="img-fluid rounded-start" alt="..." />
                 </div>
               </div>
          </div>
         <div className="card mb-3 col-4">
             <div className="row g-0">
                 <div className="col-md-6">
                   <div className="card-body">
                     <h5 className="card-title">Zebra at Hape <br /> Toys</h5>
                     <p className="card-text">$15</p>
                     <button>SHOP NOW</button>
                   </div>
                 </div>
                 <div className="col-md-6">
                   <img src={img7} className="img-fluid rounded-start" alt="..." />
                 </div>
               </div>
          </div>
      </div>
    
  )
}

export default DemosCaruselCard