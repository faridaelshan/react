import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import comp from './assets/img/comp.png';
import rocket from './assets/img/image 1.png';
import light from './assets/img/image 3.png';
import degree from './assets/img/image 2.png';
import job from './assets/img/image4.png';
import dot from './assets/img/image5.png';
import business1 from './assets/img/business1.png'
import business2 from './assets/img/business2.png'
import business3 from './assets/img/busines3.png'
import technology1 from './assets/img/technology1.png'
import technology2 from './assets/img/technology2.png'
import technology3 from './assets/img/technology3.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";




class Wearecard extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className='wetext'>
        <h5>{this.props.wehead}</h5>
        <p className='text-muted'>{this.props.wetext}</p>
      </div>
      
      )
    }
  }
  
  const ProjectCard = (props) => (
    <div className='weimg'>
        <img src={props.image} />
    </div>
  );
  
  class Textcenter extends Component{
    constructor(props){
      super(props)
    }
    render(){
      return(
        <div className='centertext'>
              <p>{this.props.centerp}</p>
              <h4 className='centerh0'>{this.props.centerh0}</h4>
              <h4 className='centerh'>{this.props.centerh1}</h4>
              <h4 className='centerh'>{this.props.centerh2}</h4>
              <h4 className='centerh'>{this.props.centerh3}</h4>
            </div>
      )
    }
  }

  const BusinessCard = (props) => (
    <div className='businessimg'>
        <img src={props.image} />
    </div>
  );

  class Cards extends Component{
    render(){
      return(
      <div className='cardbottom'>
       <p className='cardhead'>{this.props.cardhead}</p>
       <p className='cardmain'>{this.props.cardmain}</p>
      </div>
      )
    }
  }



  class App extends Component{
    render(){
    return(
     <div className='bg'>
       <nav className="navbar navbar-expand-lg navbar-light">
         <div className="container-fluid">
           <a className="navbar-brand"><span className='blacklogo'>LO</span><span className='redlogo'>GO</span></a>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
               <li className="nav-item">
                 <a className="nav-link active red" aria-current="page">Home</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link active">Who We Are</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link active">Business Consulting</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link active">Technology Consulting</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link active">Careers</a>
               </li>
             </ul>
           </div>
         </div>
        </nav>
        <section className='getstart'>
          <div className='startmain row'>
          <div className='starttext col'>
            <h1 className='starthead'>Lorem Ipsum simply dummy</h1>
            <p className='text-muted'>Lorem Ipsum simply dummy</p>
            <button className='btn btn-outline-danger'>Get Started</button>
          </div>
          <div className='startimg col'>
            <img src={comp} alt="" />
          </div>
          </div>
        </section>
        <section className='weare'>
          <Textcenter centerp="Who We Are" 
          centerh1="Lorem Ipsum is simply " 
          centerh2="dummy text of the printing and"
          centerh3=" typesetting industry"/>
        <div className='wearebtm row'>
          <div className='wearetext col'>
            <div className='card'>
              <ProjectCard image={rocket}/>
              <Wearecard  wehead="We are Lorem Ipsum"
               wetext="Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries,"/>
            </div>
            <div className='card'>
              <ProjectCard image={light}/>
              <Wearecard  wehead="We are Lorem Ipsum"
               wetext="Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries,"/>
            </div>
            <div className='card'>
              <ProjectCard image={degree}/>
              <Wearecard  wehead="We are Lorem Ipsum"
               wetext="Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries,"/>
            </div>
          </div>
            <div className='weareimg col'>
              <img className='img2' src={dot} alt="" />
              <img className='img1' src={job} alt="" />
              <img className='img3' src={dot} alt="" />
            </div>
        </div>
        </section>
        <section className='consulting'>
        <Textcenter centerp="Business Consulting" 
          centerh1="Lorem Ipsum is simply dummy text of the printing" 
          centerh2="and typesetting industry. Lorem Ipsum has been the industry's"
          centerh3="standard dummy text ever since the 1500s,"/>
          <div className='cards row'>
           <div className='businesscard col-3'>
           <BusinessCard image={business1}/>
           <Cards cardhead="Lorem Ipsum is"
           cardmain="Lorem Ipsum is simply dummy
           text of the printing and
           typesetting industry. Lorem
           Ipsum has been the industry's
           standard dummy text ever since" />
           </div>
           <div className='businesscard col-3'>
           <BusinessCard image={business2}/>
           <Cards cardhead="Lorem Ipsum is"
           cardmain="Lorem Ipsum is simply dummy
           text of the printing and
           typesetting industry. Lorem
           Ipsum has been the industry's
           standard dummy text ever since" />
           </div>
           <div className='businesscard col-3'>
           <BusinessCard image={business3}/>
           <Cards cardhead="Lorem Ipsum is"
           cardmain="Lorem Ipsum is simply dummy
           text of the printing and
           typesetting industry. Lorem
           Ipsum has been the industry's
           standard dummy text ever since" />
           </div>
          </div>
        </section>
        <section className='technology'>
        <Textcenter centerp="Technology Consulting" 
          centerh1="Lorem Ipsum is simply dummy text of the printing" 
          centerh2="and typesetting industry. Lorem Ipsum has been the industry's"
          centerh3="standard dummy text ever since the 1500s,"/>
          <div className='cards row'>
           <div className='technologycard col-3'>
           <BusinessCard image={technology1}/>
           <Cards cardhead="Lorem Ipsum is"
           cardmain="Lorem Ipsum is simply dummy
           text of the printing and
           typesetting industry. Lorem
           Ipsum has been the industry's
           standard dummy text ever since" />
           </div>
           <div className='technologycard col-3'>
           <BusinessCard image={technology2}/>
           <Cards cardhead="Lorem Ipsum is"
           cardmain="Lorem Ipsum is simply dummy
           text of the printing and
           typesetting industry. Lorem
           Ipsum has been the industry's
           standard dummy text ever since" />
           </div>
           <div className='technologycard col-3'>
           <BusinessCard image={technology3}/>
           <Cards cardhead="Lorem Ipsum is"
           cardmain="Lorem Ipsum is simply dummy
           text of the printing and
           typesetting industry. Lorem
           Ipsum has been the industry's
           standard dummy text ever since" />
           </div>
          </div>
        </section>
        <section className='community'>
        <Textcenter centerp="Welcome To Our Community" 
          centerh0="Let's Work Together"
          centerh1="Lorem Ipsum is simply dummy text of the printing" 
          centerh2="and typesetting industry. Lorem Ipsum has been the industry's"
          centerh3="standard dummy text ever since the 1500s,"/>
        </section>
        <section className='form'>
          <h1>LET'S WORK TOGETHER</h1>
          <p></p>
          <form action="" onsubmit={e=>e.preventDefault()}>
            <select className='size' name="How Can We Help You?" id="">
              <option value="">How Can We Help You?</option>
              <option value="">Lorem ipsum dolor sit amet consectetur adipisicing elit</option>
              <option value="">Lorem ipsum dolor sit amet consectetur adipisicing elit</option>
            </select>
            <div className='nameinput'>
            <input placeholder='Name*' type="text" required/>
            <input placeholder='Email*' type="text" required/>
            </div>
            <div className='contact'>
            <input placeholder='Phone*' type="text" required/>
            <input placeholder='Organization*' type="text" required/>
            </div>
            <textarea placeholder='Message' name="" id="" cols="100" rows="2"></textarea>
            <button className='btn ' onClick={this.handleClick}>Send</button>
          </form>
        </section>
        <section className='footer'>
          <div className='footerlink'><p>&copy;Copyright2022&#8739; All Rights Reserved</p></div>
          <div className='d-flex'> 
             <p>Follow us:</p>   
            <button><FaFacebook/></button>
            <button><FaInstagram/></button>
            <button><FaTwitter/></button>
            <button><FaLinkedinIn/></button></div>
        </section>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));
