import React from 'react'

const CategoryCard = (props) => {
  return (
    <div className="card border-light" style={{width: '10rem'}}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{props.title}</h5>
        </div>
      </div>
  )
}

export default CategoryCard