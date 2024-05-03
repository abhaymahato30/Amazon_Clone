import React from "react";
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useSelector } from 'react-redux'




const Header = () => {
    const cartItems =useSelector((state) => state.cart)
  
  return (
    <div className="header">
     <Link to='/'><img  className="header_logo"src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="#" /></Link> 
      <div className="header_search">
        <input type="text" className="header-search-input" />
        {/* logo */}
        <SearchIcon className="search-icon"/>
      </div>
      <div className="header-nav">
        <div className="header-options">
          <span className="header__optionline-one">Hlo_Guest </span>
        <Link  to='/login' className="header__optionline-two">signin</Link> 

        </div>
        <div className="header-options">
        <span className="header__optionline-one">Return</span>

        <span className="header__optionline-two">&Order</span>


        </div>
        <div className="header-options">
        <span className="header__optionline-one">Your</span>

        <span className="header__optionline-two">Prime</span>

        </div>
        <Link to='/checkout'>        <div className="header__basket_option">
        <ShoppingBasketIcon/>
        <span className="header__basket-count header__optionline-two">
          {cartItems.length}
          </span>


        </div></Link>

      </div>
    </div>
  );
};

export default Header;
