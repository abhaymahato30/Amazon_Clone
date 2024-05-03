import React from "react";
import "./checkoutProduct.css";
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../../redux/CartSlice'

const checkoutProduct = ({id,image,title,rating,price}) => {
  const cartItems = useSelector(state=>state.cart)
  console.log(cartItems);
  const dispatch = useDispatch();
  const removeItem =(id) =>{
   return dispatch(remove(id))
  }

 return (
    
    cartItems.map((d,i) =>(
      <div className="checkoutProduct">
        <img className="checkoutProduct_image" src={d.image} />

        <div className="checkoutProduct_info">
          <p className="checkoutProduct_tittle">{d.title}</p>
          <p className="checkoutProduct_price"> $ <strong>{d.price}</strong> </p>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <button onClick={()=> removeItem(d.id)}>Remove from basket</button>
        </div>
      </div>


    ))
 
    
  );
};

export default checkoutProduct;
