import React, { useState,useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

const Subtotal = () => {
  const cartItems = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);
  const { cart } = useSelector((state) => state);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  

  return (
    <div className="subtotal">
      <strong>Total Items =   <span>{cartItems.length}</span> </strong>
    
      

      <small className="subTotal_gift">
        <input type="checkbox" />
        This Order Contains a gift
      </small>
        <p>Total :  ${totalAmount}</p>

      <button className="btn-check">Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
