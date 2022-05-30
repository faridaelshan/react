import Layout from "../components/layout";
import Logo from '../img/logo.png'
import Plane from '../img/element-2.png'

const index =()=>{
    return(
        <Layout>
            <div className="row">
                <div className="col-6 ms-5 mt-5">
                   <img src={Logo.src} alt="" />
                   <h1>Book a private jet instantly</h1>
                   <p>
                   Curly Airline proudly raises the bar and exceeds <br /> 
                   the standard for luxuruy and corporate private jet <br />
                   charter services. We pride ourselves on offering <br />
                   a professional service.
                    </p>
                   <button className="btn btn-outline-warning">Make your trip</button>
                   <button className="btn btn-outline-warning">Request Quote</button>
                    
                </div>
                <div className="col">
                    <img className="img" src={Plane.src} alt="" />
                </div>
         </div>
            
        <style jsx>{`
          .row{
              width:100%;
            background-color:rgb(25, 35, 45);
            color:white;
          }  
          .col-6{

          }
          .img{
              position:absolute;
              right:300px;
              width:600px;
          }
        `}</style>
        </Layout>
    )
}
export default index;