import React, { useState } from 'react'
import './Checkout.css'


import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../../redux/CartSlice'
import Subtotal from './Subtotal'

const Checkout = () => {

  const cartItems = useSelector(state=>state.cart)
  console.log(cartItems);
  const dispatch = useDispatch();
  const removeItem =(id) =>{
   return dispatch(remove(id))
  }
  return (
    <>
      <div className="checkout">
        <div className="checkout_left">
            <img  className="checkout_add" src="https://m.media-amazon.com/images/G/31/img21/MA2023/BOTW23/Nov/29/BOTW_29_3000x800._SX3000_QL85_.jpg" alt="" />
        <div className="checkout_tittle">
            <h1 className="checkout_tittle_heading">Your Shopping Basket</h1>
         
            
        </div>

   {/* / checkout product */}
  {cartItems.map(item => {
       return(
        <>
      <div className="checkoutProduct">
        <img className="checkoutProduct_image" src={item.image} />

        <div className="checkoutProduct_info">
          <p className="checkoutProduct_tittle">{item.title}</p>
          <p className="checkoutProduct_price"> $ <strong>{item.price}</strong> </p>
          <div className="product_rating">
            {Array(item.rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <button
           onClick= {() => dispatch(remove(item.id))} 
           >  
           Remove from basket </button>
        </div>
      </div>
    </>
       )

      })
    } 





        </div>
        <div className="checkout_right">
          <Subtotal/>
        </div>
      </div>
    </>
  )
}

export default Checkout
