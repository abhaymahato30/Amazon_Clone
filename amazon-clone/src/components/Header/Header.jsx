import React from "react";
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Header = () => {
  return (
    <div className="header">
      <img  className="header_logo"src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="#" />
      <div className="header_search">
        <input type="text" className="header-search-input" />
        {/* logo */}
        <SearchIcon className="search-icon"/>
      </div>
      <div className="header-nav">
        <div className="header-options">
          <span className="header__optionline-one">Hlo_Guest </span>
        <span className="header__optionline-two">signin</span>

        </div>
        <div className="header-options">
        <span className="header__optionline-one">Return</span>

        <span className="header__optionline-two">&Order</span>


        </div>
        <div className="header-options">
        <span className="header__optionline-one">Your</span>

        <span className="header__optionline-two">Prime</span>

        </div>
        <div className="header__basket_option">
        <ShoppingBasketIcon/>
        <span className="header__basket-count header__optionline-two">0</span>


        </div>
      </div>
    </div>
  );
};

export default Header;
