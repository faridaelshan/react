import React from 'react'
import img5 from '../../img/prod25.jpg' 
import img6 from '../../img/prod31.jpg' 
import img7 from '../../img/shop-21.jpg' 

const DemosCaruselCard = () => {
  return (
      <div className='row m-0'>
         <div className="card mb-3 col-4" style={{"border":"none","backgroundColor":"rgb(251, 214, 218)"}}>
             <div className="row g-0">
                 <div className="col-md-6">
                   <div className="card-body">
                     <h5 className="card-title">Baby Jogger City Stroller</h5>
                     <h4 style={{"color":"rgb(234, 50, 70)","fontWeight":"900"}} className="card-text my-3">$250</h4>
                     <button style={{"backgroundColor":"rgb(234, 50, 70)","border":"none"}} className="rounded-pill p-2 my-3 text-white">SHOP NOW</button>
                   </div>
                 </div>
                 <div className="col-md-6">
                   <img src={img5} style={{"position":"absolute","bottom":"0px","height":"250px"}} className="p-3 img-fluid rounded-start" alt="..." />
                 </div>
               </div>
          </div>
         <div className="card mb-3 col-4" style={{"border":"none","backgroundColor":"rgb(255, 230, 208)"}}>
             <div className="row g-0">
                 <div className="col-md-6">
                   <div className="card-body">
                     <h5 className="card-title">Bodyguard Plus Baby Carseat</h5>
                     <h4 style={{"color":"rgb(255, 129, 22)","fontWeight":"900"}} className="card-text my-3">$450</h4>
                     <button style={{"backgroundColor":"rgb(255, 129, 22)","border":"none"}} className="rounded-pill p-2 my-3 text-white">SHOP NOW</button>
                   </div>
                 </div>
                 <div className="col-md-6">
                   <img src={img6} style={{"position":"absolute","bottom":"0px","height":"250px"}} className="p-3 img-fluid rounded-start" alt="..." />
                 </div>
               </div>
          </div>
         <div className="card mb-3 col-4" style={{"border":"none","backgroundColor":"rgb(221, 237, 252)"}}>
             <div className="row g-0">
                 <div className="col-md-6">
                   <div className="card-body">
                     <h5 className="card-title">Zebra at Hape <br /> Toys</h5>
                     <h4 style={{"color":"rgb(93, 172, 245)","fontWeight":"900"}} className="card-text my-3">$15</h4>
                     <button style={{"backgroundColor":"rgb(93, 172, 245)","border":"none"}} className="rounded-pill p-2 text-white my-3">SHOP NOW</button>
                   </div>
                 </div>
                 <div className="col-md-6">
                   <img src={img7} style={{"position":"absolute","bottom":"0px","height":"250px"}} className="p-3img-fluid rounded-start" alt="..." />
                 </div>
               </div>
          </div>
      </div>
    
  )
}

export default DemosCaruselCard