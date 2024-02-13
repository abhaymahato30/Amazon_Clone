import React from "react";
import "./checkoutProduct.css";

const checkoutProduct = ({id,image,title,rating,price}) => {
  return (
    <>
      <div className="checkoutProduct">
        <img className="checkoutProduct_image" src={image} />

        <div className="checkoutProduct_info">
          <p className="checkoutProduct_tittle">{title}</p>
          <p className="checkoutProduct_price"> $ <strong>{price}</strong> </p>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <button>Remove from basket</button>
        </div>
      </div>
    </>
  );
};

export default checkoutProduct;
