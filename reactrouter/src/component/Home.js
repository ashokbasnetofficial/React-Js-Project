import React, { useEffect, useState } from 'react'
import NavBars from './NavBars'
import axios from 'axios';
import  useSWR  from 'swr';
import Star from './Star';
import Skeleton from 'react-loading-skeleton'

const Home = ({data,isLoading}) => {
  const [data1,setData] = useState([]);

useEffect(()=>{
  isLoading?setData([1,2,3,4,5,6,7,8]):setData(data)
},
[])
return (

     <div className="home_page container mt-4">
      <div className="products">
        <h4 className='products-title text-dark mt-4 mb-4'>PRODUCTS</h4>
      </div>
       <div className="row">
        { 
          isLoading?
          data1.map((data,index)=>{
         
            return  <div className="col-sm-3 mt-4" key={index}>
            <div className="thumb-wrapper">
              <span className="wish-icon pb-4"><Skeleton circle width={30} height={30}/></span>
              <div className="img-box mt-3">
                <Skeleton  height={100}/>
              </div>
              <div className="thumb-content">
                <h4> <Skeleton/></h4>									
                <div className="star-rating">
                  <ul className="list-inline">
                  <Skeleton/>
                   
                  </ul>
                </div>
                <p className="item-price"> <b> <Skeleton/></b></p>
                <a href="#" className="btn btn-primary"> <Skeleton/></a>
              </div>						
            </div>
            </div>

          }):
          data.map((data,index)=>{
            const titlesplit = data.title.split(' ');
            const fiveWordsTitle = titlesplit.slice(0,5).join(' ')
            return  <div className="col-sm-3 mt-4" key={index}>
            <div className="thumb-wrapper">
              <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
              <div className="img-box">
                <img src={data.image} />
              </div>
              <div className="thumb-content">
                <h4>{fiveWordsTitle}</h4>									
                <div className="star-rating">
                  <ul className="list-inline">
                   <Star rating={data.rating.rate} />
                   
                  </ul>
                </div>
                <p className="item-price"> <b>${data.price}</b></p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
              </div>						
            </div>
            </div>

          })
          
        }
             
       </div>
     </div>
  )
}

export default Home