import React from 'react'
import { connect } from 'react-redux'
import BlogListItem from './BlogListItem'

const BlogList = (props) => {
  return (
    <ul>
      {props.deyer.map(megale=>{
        return <BlogListItem key={megale.id}{...megale} />
      })}
    </ul>
  )
}

const mapStateToProps=(state)=>{
  return{
    deyer:state.itema
  }
}

export default connect(mapStateToProps)(BlogList)