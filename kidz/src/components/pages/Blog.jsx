import React from 'react'
import Data from '../../data/Data'
import { Link } from 'react-router-dom'


const BlogItem =(props)=>{
  return(
    <div className='m-2 col-3 blogitem'>
      <Link to="blogpage">
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3>{props.title}</h3>
          <h6 className='text-muted'>{props.time} IN UNCATEGORIZED</h6>
          <p className="card-text">{props.desc}</p>
        </div>
    </Link>
      </div>
  )
}

const Blog = () => {
  return (
    <div className='container blog'>
      <h1>Blog</h1>
      <div className='row'>
      {Data.blogpost.map((item,index)=>{
        return(
          <BlogItem 
          time={item.time}
          title={item.title}
          img={item.img}
          desc={item.desc}
          key={index}
          />
        )
      })}
      </div>
    </div>
  )
}

export default Blog