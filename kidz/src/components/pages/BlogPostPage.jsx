import React,{useState} from 'react'
import Data from '../../data/Data'
import {ImQuotesRight} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {RiWhatsappFill} from 'react-icons/ri'
import {GrFacebookOption,GrPinterest} from 'react-icons/gr'
import img from '../../img/blog0.jpg'
import ReactPaginate from 'react-paginate'

const BlogPostItem =(props)=>{
    return(
        <div className="card mb-4 blogpostitem" style={{"border":"none"}}>
        <div className="row g-0">
          <div className="col-md-3">
            <img src={props.img} className="img-fluid rounded-start"/>
          </div>
          <div className="col-md-9">
            <div className="card-body py-0">
              <h6 className="card-title">{props.title}</h6>
              <p className="card-text"><small className="text-muted">{props.time}</small></p>
            </div>
          </div>
        </div>
      </div>
    )
}

const BlogPostData =props=>{
  return(
    <div>
          <h6>UNCATEGORIZED</h6>
          <h1>{props.title}</h1>
          <p className='text-muted'>{props.time}</p>
          <div className='posttext text-justify'>
            <img src={props.img} className="m-3" alt="" />
            <h3>{props.head}</h3>
            <p>{props.headtext}</p>
            <h3><ImQuotesRight />{props.important}</h3>
            <h4>{props.secondhead}</h4>
            <p>{props.secondheadtext}</p>
            <div><h6 className='text-end'>SHARE<GrFacebookOption /><BsTwitter /><GrPinterest /><RiWhatsappFill /></h6></div>
          </div>
          <hr />
          
        </div>
  )
}


const BlogPostPage = () => {
  const [items,setItems]=useState(Data.blogpost.slice(0,6));
  const[pageNumber,setPageNumber]=useState(0);
  const itemPerPage=1;
  const pageVisited=pageNumber*itemPerPage;
  const displayItems=items.slice(pageVisited,pageVisited+itemPerPage).map((item,index)=>{
    return( <BlogPostData 
        title={item.title}
        time={item.time}
        img={item.img}
        head={item.head}
        headtext={item.headtext}
        important={item.important}
        secondhead={item.secondhead}
        secondheadtext={item.secondheadtext}
        item={item}
        key={index} 
        />)
      });
      const pageCount = Math.ceil(items.lenght/itemPerPage);
      const changepage = ({selected})=>{
        setPageNumber(selected)
      }
  return (
    <div className='row m-0 ms-4 blogpostpage'>
      <div className='col-8'>
        {displayItems}
        <ReactPaginate 
      previousLabel={'<<pre'}
      nextLabel={'next>>'}
      pageCount={3}
      onPageChange={changepage}
      containerClassName={'paginate'}
      pageClassName={'pages'}
      previousClassName={'prepage'}
      nextClassName={'nextpage'}
      pageLinkClassName={'pagelink'}
      previousLinkClassName={'prepagelink'}
      nextLinkClassName={'nextpagelink'}
      activeClassName={'activepage'}
      activeLinkClassName={'activepagelink'}
      />
      <div className='posts'>
            <h6 className='text-center mt-5'>YOU MIGHT ALSO LIKE</h6>
            <div className='row ms-5'>
              <div className='col-3 m-3'>
              <div className="card">
                <img src={img} className="card-img-top"/>
                <div className="card-body">
                  <h6>Few quips galvanized the mock jury box</h6>
                  <p className="card-text text-muted">SEPTEMBER 1, 2016</p>
                </div>
              </div>
              </div>
              <div className='col-3 m-3'>
              <div className="card">
                <img src={img} className="card-img-top"/>
                <div className="card-body">
                  <h6>Few quips galvanized the mock jury box</h6>
                  <p className="card-text text-muted">SEPTEMBER 1, 2016</p>
                </div>
              </div>
              </div>
              <div className='col-3 m-3'>
              <div className="card">
                <img src={img} className="card-img-top"/>
                <div className="card-body">
                  <h6>Few quips galvanized the mock jury box</h6>
                  <p className="card-text text-muted">SEPTEMBER 1, 2016</p>
                </div>
              </div>
              </div>
            </div>
          </div>
          <hr />
          <form className='ms-5'>
            <h6>LEAVE A REPLY</h6>
            <p>Your email address will not be published. Required fields are marked *</p>
            <div className='row'>
              <div className='col-5 ms-5'>
                <label htmlFor='name' className='text-muted'>NAME *</label><br />
                <input id="name" type="text" /><br />
                <label htmlFor="email" className='text-muted'>EMAIL *</label><br />
                <input id="email" type="text" /><br />
                <label htmlFor="website" className='text-muted'>WEBSITE</label><br />
                <input id="website" type="text" />
              </div>
              <div className='col-6'>
              <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
              </div>
            </div>
            <div className="d-flex justify-content-end mt-3">
              <button className='btn btn-info text-white m-4'>Post Comment</button>
            </div>
          </form>
      </div>
        
        <div className='col-3'>
            <h4>LATEST POSTS</h4>
            <div className='d-flex flex-column mb-5'>
            {Data.blogpost.slice(1).map((item,index)=>{
                return(
                    <BlogPostItem 
                    title={item.title}
                    time={item.time}
                    img={item.img}
                    key={index}
                    />
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default BlogPostPage