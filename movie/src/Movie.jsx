import React from 'react'

const Movie = ({name,desc,price,image}) => {
  return (
    <div className="card m-5 col-12 col-md-4" style={{width: '18rem'}}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{desc}</p>
          <a href="#" className="btn btn-outline-warning">{price}</a>
        </div>
      </div>
  )
}

export default Movie