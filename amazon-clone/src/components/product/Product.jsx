import React, { useState } from "react";
import './product.css'

import { useDispatch,useSelector } from 'react-redux'
import { add } from "../../redux/CartSlice";


const Product = ({id,title,image,price,rating}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
//   const [totalPrice,setToalPrice]=useState();
// const total = () => {
//     let totalPrice=0;
//     cartItems.map((item,k)=>{
//         totalPrice = item.price + totalPrice
//     })
//     setTotalPrice(totalPrice);



  
  

  return (
    <>
      <div className="product" >
        <div className="product_info ">
          <h3>{title}</h3>
          <p className="product_pricing">
            
            <h3>${price}</h3>
          </p>
          <div className="product_rating">
            {Array(rating).fill().map((_,i)=>(
                <p>⭐</p>

            ))}
          
          </div>
        </div>
    
        <img src={image}  alt="" />
      

        <button   
         onClick={()=>{
          dispatch(add({id,title,image,price,rating}))

          // total()
        
        }}

    
         
         >Add To Basket</button>
      </div>
    </>
  );
};

export default Product;
