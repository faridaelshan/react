import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import {FaSearch} from 'react-icons/fa'
import {CgAirplane} from 'react-icons/cg'
import style from './nav.module.css'
import Logo from '../img/logo.png'

const nav =()=>{
    return(
        <div className={style.bgnav}>
            <nav className="navbar navbar-expand-lg navbar-dark container">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={Logo.src} alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link href="/" className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </Link>
              <Link href="/about" className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About Us</a>
              </Link>
              <Link href="/about" className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Pages</a>
              </Link>
              <Link href="/about" className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Blog</a>
              </Link>
              <Link href="/about" className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Faq</a>
              </Link>
              <Link href="/about" className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
              </Link>
              
            </ul>
            <form className="d-flex" role="search">
              <button className="btn text-light" type="submit"><FaSearch /></button>
              <button className="btn text-light" type="submit"><CgAirplane /> Book Now</button>
            </form>
          </div>
        </div>
      </nav>
        </div>
    )
}
export default nav