import React from "react";
import './product.css'

const Product = ({title,image,price,rating}) => {
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
      

        <button>Add To Basket</button>
      </div>
    </>
  );
};

export default Product;
