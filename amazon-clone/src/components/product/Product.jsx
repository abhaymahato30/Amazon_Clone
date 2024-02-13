import React, { useState } from "react";
import './product.css'
import { useSelector, useDispatch } from 'react-redux'
import { addtoCart } from "../../features/counter/counterSlice";
// import { decrement, increment } from '../../features/counter/counterSlice'


const Product = ({id,title,image,price,rating}) => {
  // const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

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
      

        <button   aria-label="Increment value"
         onClick={()=>dispatch(addtoCart({id,title,image,price,rating}))}>Add To Basket</button>
      </div>
    </>
  );
};

export default Product;
  // onClick={() => dispatch(increment())}
