import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

const Checkout = () => {
  return (
    <>
      <div className="checkout">
        <div className="checkout_left">
            <img  className="checkout_add" src="https://m.media-amazon.com/images/G/31/img21/MA2023/BOTW23/Nov/29/BOTW_29_3000x800._SX3000_QL85_.jpg" alt="" />
        <div className="checkout_tittle">
            <h1 className="checkout_tittle_heading">Your Shopping Basket</h1>
        </div>
        </div>
        <div className="checkout_right">
            <Subtotal>
        </div>
      </div>
    </>
  )
}

export default Checkout
