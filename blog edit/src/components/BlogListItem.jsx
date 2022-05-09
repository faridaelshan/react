import React from 'react'
import { Link } from 'react-router-dom'

const BlogListItem = ({id,title}) => {
  return (
    <li className='mt-2'>{title}-<Link className='btn btn-info' to={`/blog/${id}`}>Description</Link>
    <Link className='btn btn-primary ms-1' to={`/edit/${id}`}>Edit</Link>
    </li>
  )
}

export default BlogListItem