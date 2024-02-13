import React from 'react'
import CurrencyFormat from "react-currency-format"
import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from '../../features/counter/counterSlice'

const Subtotal = () => {
  const cartItems =useSelector(state => state.cart.cart)

  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()


  return (
    
    <div className='subtotal'>
    <CurrencyFormat
    renderText={(value)=>(
      <>
      <p>Subtotal({cartItems.length} items):<strong>{cartItems.price}</strong></p>
      <strong></strong>
      <small className="subTotal_gift">

        <input type="checkbox" />
        This Order Contains a gift
      </small>
      </>
    )}
    decimalScale={2}
    value={0}
    displayType={"text"}
    thousandSeparator={true}
    prefix={"$"}
    
    
    />
    <button className='btn-check'>Proceed  to Checkout</button>
      
    </div>
   
  )
}

export default Subtotal
