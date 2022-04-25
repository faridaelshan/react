import React,{useState} from 'react'
import Productitems from './Productitems'
import data from './data'
import ReactPaginate from 'react-paginate'

const Product = () => {
  const [items,setItems]=useState(data.productData.slice(0,39));
  const[pageNumber,setPageNumber]=useState(0);
  const itemPerPage=16;
  const pageVisited=pageNumber*itemPerPage;
  const displayItems=items.slice(pageVisited,pageVisited+itemPerPage).map((item,index)=>{
    return(
     <Productitems 
     img={item.img}
     title={item.title}
     desc={item.desc}
     price={item.price}
     discount={item.discount}
     vendor={item.vendor}
     item={item}
     key={index}
     />
    )
  });
  const pageCount = Math.ceil(items.lenght/itemPerPage);
  const changepage = ({selected})=>{
    setPageNumber(selected)
  }

  return (
    <div className='container mb-5 d-flex carddiv'>
      <div className='row pb-5'>
      
           {displayItems}
         <ReactPaginate 
      previousLabel={'<<'}
      nextLabel={'>>'}
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
         </div>

    </div>
  )
}

export default Product