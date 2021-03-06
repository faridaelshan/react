import React from 'react'
import Data from '../../data/Data'

const BlogPostItem =(props)=>{
    return(
        <div className="card col-5 m-3" style={{maxWidth: '540px'}}>
            <div className="row">
              <div className="col-md-4">
                <img src={props.img} className="me-auto rounded-start"/>
              </div>
              <div className="col-md-8">
                <div className="card-body ms-5">
                  <p className="card-text text-muted">{props.time}</p>
                  <h4 className="card-title">{props.title}</h4>
                  <button className="btn btn-white text-info"><b>Read More</b></button>
                </div>
              </div>
            </div>
        </div>
    )
}

const BlogPosts = () => {
  return (
    <div className='m-5'>
        <div className='d-flex justify-content-center flex-column align-items-center'>
        <button style={{"backgroundColor":"transparent","border":"none"}}>BLOG POSTS</button>
        <div style={{"backgroundColor":"rgb(93, 172, 245)",width:"90px",height:"4px"}}></div>
        </div>
        <div className='container'>
            <div className='row'>
                {Data.blogpost.filter(item=>item.demos===true).map((item,index)=>{
                    return(
                        <BlogPostItem key={index} title={item.title} img={item.img} time={item.time}/>
                    )
                })}
            </div>
        </div>
    </div>
        
  )
}

export default BlogPosts